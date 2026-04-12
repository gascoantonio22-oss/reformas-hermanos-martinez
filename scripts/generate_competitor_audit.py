#!/usr/bin/env python3

from __future__ import annotations

import concurrent.futures
import html
import json
import re
from collections import Counter
from dataclasses import dataclass, asdict
from pathlib import Path
from typing import Any
from urllib.parse import urlparse

import requests
from bs4 import BeautifulSoup


ROOT = Path("/Users/antonio/Documents/reformas-hermanos-martinez-main")
URLS_FILE = ROOT / "scripts" / "competitor_urls.txt"
OUTPUT_HTML = ROOT / "competitor-audit.html"
OUTPUT_JSON = ROOT / "competitor-audit.json"
HEADERS = {
    "User-Agent": (
        "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) "
        "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0.0.0 Safari/537.36"
    )
}
SOCIAL_HOSTS = ("facebook.com", "instagram.com")
SEOISH_TLDS = (".site", ".pro", ".com.es")
CTA_KEYWORDS = (
    "presupuesto",
    "contacto",
    "llamar",
    "llámanos",
    "whatsapp",
    "solicitar",
    "presupuestos",
)


@dataclass
class AuditRow:
    index: int
    url: str
    status: str
    final_url: str
    title: str
    description: str
    h1: str
    summary: str
    score: int
    tags: list[str]
    frictions: list[str]
    metrics: dict[str, Any]


def slugify_host(url: str) -> str:
    return urlparse(url).netloc.lower().replace("www.", "")


def clean_text(value: str | None) -> str:
    if not value:
        return ""
    return re.sub(r"\s+", " ", value).strip()


def keyword_stuffing_score(text: str) -> int:
    lowered = text.lower()
    return lowered.count("reforma") + lowered.count("reformas")


def make_summary(tags: list[str], frictions: list[str]) -> str:
    if not frictions:
        return "Web operativa con menos fricciones visibles que la media del sector."
    if "social" in tags:
        return "Dependencia de perfil social: cuesta convertir y controlar la captación."
    if "wix" in tags:
        return "Aspecto de plantilla y exceso SEO: transmite menos confianza de marca."
    if "error" in tags:
        return "Hay un problema técnico o de acceso que ya genera fricción antes de vender."
    return frictions[0]


def analyze_html(index: int, original_url: str, response: requests.Response) -> AuditRow:
    soup = BeautifulSoup(response.text, "html.parser")
    final_url = response.url
    parsed_final = urlparse(final_url)
    host = parsed_final.netloc.lower()
    title = clean_text(soup.title.string if soup.title else "")
    description_tag = soup.find("meta", attrs={"name": re.compile("^description$", re.I)})
    description = clean_text(description_tag.get("content") if description_tag else "")
    h1 = clean_text(soup.find("h1").get_text(" ", strip=True) if soup.find("h1") else "")
    viewport = bool(soup.find("meta", attrs={"name": re.compile("^viewport$", re.I)}))
    forms = len(soup.find_all("form"))
    tel_links = len(soup.find_all("a", href=re.compile(r"^tel:", re.I)))
    whatsapp_links = len(soup.find_all("a", href=re.compile(r"(wa\.me|whatsapp)", re.I)))
    nav_links = sum(len(nav.find_all("a")) for nav in soup.find_all("nav"))
    body_text = clean_text(soup.get_text(" ", strip=True))
    word_count = len(body_text.split())
    html_kb = len(response.text.encode("utf-8")) / 1024
    load_seconds = round(response.elapsed.total_seconds(), 2)
    cta_links = sum(
        1
        for link in soup.find_all(["a", "button"])
        if any(keyword in clean_text(link.get_text(" ", strip=True)).lower() for keyword in CTA_KEYWORDS)
    )

    tags: list[str] = []
    frictions: list[str] = []
    score = 0

    if response.request.url.startswith("http://"):
        tags.append("http")
        frictions.append("La URL inicial entra por HTTP: transmite menos confianza y sensación de web antigua.")
        score += 2

    if any(social in host for social in SOCIAL_HOSTS):
        tags.append("social")
        frictions = [
            "No es una web propia sino un perfil social: peor control de captación, marca y analítica.",
            "Depender de Facebook o Instagram mete fricción para pedir presupuesto y da menos imagen de empresa estructurada.",
        ]
        score += 5

    if "wixsite.com" in host or "wix.com" in body_text.lower():
        tags.append("wix")
        frictions.append("Se percibe como Wix/plantilla: resta autoridad y da sensación de negocio menos consolidado.")
        score += 4

    if not viewport:
        tags.append("no-mobile-meta")
        frictions.append("No aparece viewport móvil claro: riesgo serio de mala experiencia en teléfono.")
        score += 4

    if not h1:
        tags.append("no-h1")
        frictions.append("La propuesta principal no queda clara porque no hay un H1 fuerte y reconocible.")
        score += 3
    elif len(h1) > 80:
        tags.append("h1-largo")
        frictions.append("El titular principal es demasiado largo: cuesta entender rápido qué ofrecen.")
        score += 2

    if title:
        if len(title) > 68 or keyword_stuffing_score(title) >= 3:
            tags.append("title-seo")
            frictions.append("El título parece más pensado para SEO que para convencer: suena genérico o recargado.")
            score += 2
    else:
        tags.append("no-title")
        frictions.append("Falta título claro en la página: mala señal para SEO y para percepción de cuidado.")
        score += 3

    if not description:
        tags.append("no-description")
        frictions.append("La meta description está ausente o floja: mala señal de cuidado y menos control del clic.")
        score += 1

    if forms == 0 and tel_links == 0 and whatsapp_links == 0 and cta_links == 0:
        tags.append("weak-cta")
        frictions.append("No hay una captación clara y rápida visible: pedir presupuesto parece un esfuerzo extra.")
        score += 4
    elif forms == 0 and whatsapp_links == 0 and tel_links > 0:
        tags.append("phone-only")
        frictions.append("Se apoya demasiado en llamar por teléfono y no tanto en un formulario o CTA más cómodo.")
        score += 2

    if nav_links >= 10:
        tags.append("nav-noise")
        frictions.append("Hay demasiadas opciones de navegación y eso mete ruido antes del contacto.")
        score += 2

    if word_count > 1600:
        tags.append("too-much-text")
        frictions.append("Hay muchísimo texto en la página y la jerarquía se vuelve pesada para convertir.")
        score += 3

    if html_kb > 500:
        tags.append("heavy-html")
        frictions.append("La home es muy pesada en HTML/contenido: suele ir ligada a sensación de web saturada.")
        score += 2

    if parsed_final.path and parsed_final.path not in ("", "/"):
        path = parsed_final.path.lower()
        if any(token in path for token in ("sobre", "about", "quienes", "quiénes")):
            tags.append("non-sales-landing")
            frictions.append("La URL enviada aterriza en una página más informativa que comercial: peor para captar.")
            score += 2

    hostname = slugify_host(final_url)
    if any(hostname.endswith(tld) for tld in SEOISH_TLDS) or hostname.count("-") >= 2 or hostname.startswith("xn--"):
        tags.append("seo-domain")
        frictions.append("El dominio suena muy SEO o poco marca: resta memorabilidad y confianza percibida.")
        score += 2

    unique_frictions: list[str] = []
    for friction in frictions:
        if friction not in unique_frictions:
            unique_frictions.append(friction)

    top_frictions = unique_frictions[:4]
    if response.status_code >= 400:
        tags.append("error")
        top_frictions.insert(0, f"La web responde con estado {response.status_code}: ya hay fricción técnica de entrada.")
        score += 5

    summary = make_summary(tags, top_frictions)
    status = f"HTTP {response.status_code}"

    metrics = {
        "forms": forms,
        "tel_links": tel_links,
        "whatsapp_links": whatsapp_links,
        "nav_links": nav_links,
        "word_count": word_count,
        "html_kb": round(html_kb, 1),
        "load_seconds": load_seconds,
        "viewport": viewport,
        "cta_links": cta_links,
    }

    return AuditRow(
        index=index,
        url=original_url,
        status=status,
        final_url=final_url,
        title=title or "Sin título visible",
        description=description or "Sin meta description clara",
        h1=h1 or "Sin H1 claro",
        summary=summary,
        score=score,
        tags=tags,
        frictions=top_frictions or ["No se detectaron fricciones automáticas claras en esta pasada."],
        metrics=metrics,
    )


def analyze_one(index: int, url: str, first_seen_index: int | None = None) -> AuditRow:
    normalized = url.strip()
    if first_seen_index is not None and first_seen_index != index:
        return AuditRow(
            index=index,
            url=normalized,
            status="Duplicada",
            final_url=normalized,
            title="URL duplicada en la lista",
            description="",
            h1="",
            summary="Esta entrada repite una URL ya auditada.",
            score=0,
            tags=["duplicate"],
            frictions=[f"Esta URL ya apareció antes en la posición {first_seen_index}, así que no aporta una auditoría nueva."],
            metrics={},
        )
    try:
        response = requests.get(normalized, headers=HEADERS, timeout=18, allow_redirects=True)
        return analyze_html(index, normalized, response)
    except requests.RequestException as exc:
        host = slugify_host(normalized)
        tags: list[str] = ["error"]
        frictions = [f"No se ha podido cargar correctamente: {type(exc).__name__}."]
        if any(social in host for social in SOCIAL_HOSTS):
            tags.append("social")
            frictions.insert(0, "No es una web propia sino un perfil social, con mucha más fricción para convertir.")
        if "wixsite.com" in host:
            tags.append("wix")
        if normalized.startswith("http://"):
            tags.append("http")
        return AuditRow(
            index=index,
            url=normalized,
            status="Error",
            final_url=normalized,
            title="No se pudo analizar automáticamente",
            description="",
            h1="",
            summary="Hay un problema técnico o de acceso que ya genera fricción antes de vender.",
            score=6,
            tags=tags,
            frictions=frictions[:4],
            metrics={},
        )


def severity(score: int) -> str:
    if score >= 8:
        return "alta"
    if score >= 4:
        return "media"
    return "baja"


def render_badges(items: list[str], variant: str) -> str:
    return "".join(
        f'<span class="badge badge-{variant}">{html.escape(item)}</span>'
        for item in items
    )


def render_card(row: AuditRow) -> str:
    sev = severity(row.score)
    metrics = row.metrics
    metrics_html = ""
    if metrics:
        metric_items = [
            ("Forms", metrics.get("forms")),
            ("Tel", metrics.get("tel_links")),
            ("WhatsApp", metrics.get("whatsapp_links")),
            ("Nav", metrics.get("nav_links")),
            ("Palabras", metrics.get("word_count")),
            ("KB HTML", metrics.get("html_kb")),
            ("Carga", f"{metrics.get('load_seconds')}s"),
        ]
        metrics_html = "<div class='metrics'>" + "".join(
            f"<div><strong>{html.escape(str(label))}</strong><span>{html.escape(str(value))}</span></div>"
            for label, value in metric_items
        ) + "</div>"

    friction_list = "".join(f"<li>{html.escape(item)}</li>" for item in row.frictions)
    tags = row.tags[:6]

    return f"""
    <article class="card severity-{sev}" data-severity="{sev}" data-host="{html.escape(slugify_host(row.url))}">
      <div class="card-top">
        <div>
          <p class="eyebrow">#{row.index:02d} · {html.escape(row.status)}</p>
          <h2>{html.escape(slugify_host(row.url))}</h2>
        </div>
        <span class="severity-pill severity-{sev}">{sev.title()}</span>
      </div>
      <p class="summary">{html.escape(row.summary)}</p>
      <div class="links">
        <a href="{html.escape(row.url)}" target="_blank" rel="noopener noreferrer">Abrir URL</a>
        <a href="{html.escape(row.final_url)}" target="_blank" rel="noopener noreferrer">Destino final</a>
      </div>
      <div class="copy-block">
        <div><strong>Title:</strong> {html.escape(row.title)}</div>
        <div><strong>H1:</strong> {html.escape(row.h1)}</div>
      </div>
      {render_badges(tags, "tag")}
      <h3>Fricciones visibles</h3>
      <ul>{friction_list}</ul>
      {metrics_html}
    </article>
    """


def build_html(rows: list[AuditRow]) -> str:
    real_rows = [row for row in rows if "duplicate" not in row.tags]
    severities = Counter(severity(row.score) for row in real_rows)
    totals = Counter(tag for row in rows for tag in row.tags)
    cards = "\n".join(render_card(row) for row in rows)
    friction_counts = Counter(tag for row in real_rows for tag in row.tags if tag not in {"duplicate", "http"})
    top_friction_items = "".join(
        f"<li><strong>{html.escape(tag.replace('-', ' '))}</strong><span>{count} webs</span></li>"
        for tag, count in friction_counts.most_common(6)
    )
    summary_badges = render_badges(
        [
            f"{len(rows)} entradas",
            f"{totals.get('social', 0)} sociales",
            f"{totals.get('wix', 0)} Wix",
            f"{totals.get('http', 0)} por HTTP",
            f"{totals.get('duplicate', 0)} duplicadas",
            f"{severities.get('alta', 0)} fricción alta",
        ],
        "summary",
    )

    return f"""<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Auditoría Competencia Reformas</title>
  <style>
    :root {{
      --bg: #eef2f5;
      --card: #ffffff;
      --ink: #1f2a37;
      --muted: #66758a;
      --line: #d8e0e8;
      --primary: #234b73;
      --accent: #da5b16;
      --high: #b42318;
      --medium: #b54708;
      --low: #027a48;
    }}
    * {{ box-sizing: border-box; }}
    body {{
      margin: 0;
      font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
      background: linear-gradient(180deg, #f6f8fb 0%, var(--bg) 100%);
      color: var(--ink);
    }}
    .wrap {{
      max-width: 1440px;
      margin: 0 auto;
      padding: 32px 20px 48px;
    }}
    .hero {{
      background: linear-gradient(135deg, rgba(35,75,115,.98), rgba(27,54,82,.95));
      color: white;
      border-radius: 28px;
      padding: 28px;
      box-shadow: 0 30px 60px -40px rgba(16, 24, 40, .45);
    }}
    .hero h1 {{
      margin: 10px 0 0;
      font-size: clamp(2rem, 3vw, 3.3rem);
      line-height: 1.02;
      letter-spacing: -0.04em;
    }}
    .hero p {{
      margin: 14px 0 0;
      max-width: 900px;
      color: rgba(255,255,255,.82);
      line-height: 1.7;
    }}
    .eyebrow {{
      margin: 0;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: .24em;
      text-transform: uppercase;
      color: rgba(255,255,255,.74);
    }}
    .badge {{
      display: inline-flex;
      align-items: center;
      gap: 8px;
      border-radius: 999px;
      padding: 8px 12px;
      font-size: 12px;
      font-weight: 700;
      letter-spacing: .02em;
      margin: 8px 8px 0 0;
    }}
    .badge-summary {{
      background: rgba(255,255,255,.12);
      color: white;
      border: 1px solid rgba(255,255,255,.14);
    }}
    .badge-tag {{
      background: #edf2f7;
      color: var(--primary);
      border: 1px solid #dce7f2;
    }}
    .grid {{
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(330px, 1fr));
      gap: 18px;
      margin-top: 24px;
    }}
    .summary-grid {{
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 16px;
      margin-top: 20px;
    }}
    .summary-card {{
      background: rgba(255,255,255,.1);
      border: 1px solid rgba(255,255,255,.12);
      border-radius: 20px;
      padding: 16px;
    }}
    .summary-card strong {{
      display: block;
      font-size: 1.75rem;
      margin-top: 4px;
      letter-spacing: -0.04em;
    }}
    .summary-card span {{
      color: rgba(255,255,255,.78);
      font-size: 14px;
    }}
    .insights {{
      display: grid;
      grid-template-columns: 1.15fr .85fr;
      gap: 18px;
      margin-top: 20px;
    }}
    .insight-card {{
      background: rgba(255,255,255,.78);
      border: 1px solid rgba(216,224,232,.95);
      border-radius: 24px;
      padding: 22px;
      box-shadow: 0 18px 36px -30px rgba(15, 23, 42, .18);
    }}
    .insight-card h2 {{
      margin: 0 0 10px;
      font-size: 1.1rem;
    }}
    .insight-card p {{
      margin: 0;
      color: var(--muted);
      line-height: 1.7;
    }}
    .top-frictions {{
      list-style: none;
      padding: 0;
      margin: 0;
      display: grid;
      gap: 10px;
    }}
    .top-frictions li {{
      display: flex;
      justify-content: space-between;
      gap: 12px;
      padding: 12px 14px;
      border-radius: 16px;
      background: #f8fafc;
      border: 1px solid var(--line);
      margin-top: 0;
      text-transform: capitalize;
    }}
    .top-frictions span {{
      color: var(--muted);
      white-space: nowrap;
    }}
    .filters {{
      display: flex;
      flex-wrap: wrap;
      gap: 12px;
      align-items: center;
      justify-content: space-between;
      margin-top: 24px;
      padding: 18px 20px;
      border-radius: 22px;
      background: rgba(255,255,255,.72);
      border: 1px solid rgba(216,224,232,.95);
      backdrop-filter: blur(10px);
      position: sticky;
      top: 14px;
      z-index: 10;
    }}
    .filter-group {{
      display: flex;
      flex-wrap: wrap;
      gap: 8px;
    }}
    .filter-btn {{
      border: 1px solid var(--line);
      background: white;
      color: var(--primary);
      border-radius: 999px;
      padding: 10px 14px;
      font-weight: 700;
      cursor: pointer;
    }}
    .filter-btn.active {{
      background: var(--primary);
      border-color: var(--primary);
      color: white;
    }}
    .search-input {{
      min-width: 280px;
      padding: 12px 14px;
      border-radius: 14px;
      border: 1px solid var(--line);
      font: inherit;
      color: var(--ink);
      background: white;
    }}
    .card {{
      background: var(--card);
      border-radius: 24px;
      border: 1px solid var(--line);
      padding: 22px;
      box-shadow: 0 18px 36px -28px rgba(15, 23, 42, .18);
    }}
    .card-top {{
      display: flex;
      justify-content: space-between;
      gap: 16px;
      align-items: start;
    }}
    .card h2 {{
      margin: 6px 0 0;
      font-size: 1.1rem;
      line-height: 1.2;
    }}
    .severity-pill {{
      border-radius: 999px;
      padding: 7px 11px;
      font-size: 12px;
      font-weight: 800;
      text-transform: uppercase;
      letter-spacing: .08em;
    }}
    .severity-alta {{
      color: var(--high);
      border-color: rgba(180,35,24,.18);
      background: rgba(180,35,24,.08);
    }}
    .severity-media {{
      color: var(--medium);
      border-color: rgba(181,71,8,.18);
      background: rgba(181,71,8,.08);
    }}
    .severity-baja {{
      color: var(--low);
      border-color: rgba(2,122,72,.18);
      background: rgba(2,122,72,.08);
    }}
    .summary {{
      margin: 14px 0;
      color: var(--muted);
      line-height: 1.6;
    }}
    .hidden {{
      display: none !important;
    }}
    .links {{
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin: 14px 0 0;
    }}
    .links a {{
      color: var(--primary);
      text-decoration: none;
      font-weight: 700;
      font-size: 14px;
    }}
    .copy-block {{
      margin-top: 14px;
      padding: 14px;
      border-radius: 18px;
      background: #f8fafc;
      color: var(--muted);
      display: grid;
      gap: 8px;
      line-height: 1.45;
      font-size: 14px;
    }}
    .card h3 {{
      margin: 18px 0 10px;
      font-size: 14px;
      letter-spacing: .14em;
      text-transform: uppercase;
      color: var(--primary);
    }}
    ul {{
      margin: 0;
      padding-left: 18px;
      color: var(--ink);
      line-height: 1.65;
    }}
    li + li {{
      margin-top: 8px;
    }}
    .metrics {{
      display: grid;
      grid-template-columns: repeat(3, minmax(0, 1fr));
      gap: 10px;
      margin-top: 18px;
    }}
    .metrics div {{
      border-radius: 16px;
      border: 1px solid var(--line);
      background: #fbfcfd;
      padding: 12px;
    }}
    .metrics strong {{
      display: block;
      font-size: 11px;
      letter-spacing: .12em;
      text-transform: uppercase;
      color: var(--muted);
      margin-bottom: 6px;
    }}
    .metrics span {{
      font-weight: 700;
      color: var(--ink);
      font-size: 14px;
    }}
    .footer-note {{
      margin-top: 22px;
      color: var(--muted);
      font-size: 14px;
      line-height: 1.65;
    }}
    @media (max-width: 720px) {{
      .wrap {{ padding: 16px 14px 32px; }}
      .hero {{ padding: 20px; border-radius: 22px; }}
      .summary-grid,
      .insights {{
        grid-template-columns: 1fr;
      }}
      .filters {{
        position: static;
        padding: 16px;
      }}
      .search-input {{
        min-width: 0;
        width: 100%;
      }}
      .card {{ padding: 18px; border-radius: 20px; }}
      .metrics {{ grid-template-columns: repeat(2, minmax(0, 1fr)); }}
    }}
  </style>
</head>
<body>
  <div class="wrap">
    <section class="hero">
      <p class="eyebrow">Auditoría Rápida</p>
      <h1>Competencia reformas analizada una a una</h1>
      <p>
        Informe generado a partir de la lista de URLs facilitada. Es una auditoría rápida de fricciones
        visibles en captación: claridad del mensaje, contacto, confianza, ruido, técnica y percepción de marca.
      </p>
      <div>{summary_badges}</div>
      <div class="summary-grid">
        <div class="summary-card"><span>Webs analizadas</span><strong>{len(real_rows)}</strong></div>
        <div class="summary-card"><span>Fricción alta</span><strong>{severities.get('alta', 0)}</strong></div>
        <div class="summary-card"><span>Social o Wix</span><strong>{totals.get('social', 0) + totals.get('wix', 0)}</strong></div>
        <div class="summary-card"><span>Entradas por HTTP</span><strong>{totals.get('http', 0)}</strong></div>
      </div>
    </section>
    <section class="insights">
      <article class="insight-card">
        <h2>Qué suele fallar en estas webs</h2>
        <p>
          El patrón más repetido es una mezcla de propuesta poco clara, ruido SEO, captación dispersa y señales de marca
          antiguas. Este informe te sirve para detectar rápido la fricción principal de cada web y usarla luego en un
          mensaje comercial mucho más preciso.
        </p>
      </article>
      <article class="insight-card">
        <h2>Fricciones más repetidas</h2>
        <ul class="top-frictions">{top_friction_items}</ul>
      </article>
    </section>
    <section class="filters">
      <div class="filter-group">
        <button class="filter-btn active" type="button" data-filter="all">Todas</button>
        <button class="filter-btn" type="button" data-filter="alta">Alta</button>
        <button class="filter-btn" type="button" data-filter="media">Media</button>
        <button class="filter-btn" type="button" data-filter="baja">Baja</button>
      </div>
      <input class="search-input" id="search" type="search" placeholder="Buscar dominio..." />
    </section>
    <div class="grid">
      {cards}
    </div>
    <p class="footer-note">
      Nota: esto es una auditoría rápida automática + revisión de muestra, pensada para detectar fricciones
      visibles y abrir conversaciones comerciales. No sustituye una revisión UX completa con móvil, velocidad,
      mapas de scroll y conversión real.
    </p>
  </div>
  <script>
    const buttons = Array.from(document.querySelectorAll('.filter-btn'));
    const cards = Array.from(document.querySelectorAll('.card'));
    const search = document.getElementById('search');
    let currentFilter = 'all';

    function applyFilters() {{
      const term = (search?.value || '').trim().toLowerCase();
      cards.forEach((card) => {{
        const severity = card.dataset.severity || '';
        const host = card.dataset.host || '';
        const matchSeverity = currentFilter === 'all' || severity === currentFilter;
        const matchSearch = !term || host.includes(term);
        card.classList.toggle('hidden', !(matchSeverity && matchSearch));
      }});
    }}

    buttons.forEach((button) => {{
      button.addEventListener('click', () => {{
        currentFilter = button.dataset.filter || 'all';
        buttons.forEach((btn) => btn.classList.toggle('active', btn === button));
        applyFilters();
      }});
    }});

    search?.addEventListener('input', applyFilters);
  </script>
</body>
</html>
"""


def main() -> None:
    urls = [line.strip() for line in URLS_FILE.read_text(encoding="utf-8").splitlines() if line.strip()]
    first_seen_by_url: dict[str, int] = {}
    for index, url in enumerate(urls, start=1):
        first_seen_by_url.setdefault(url, index)

    # Requests in parallel, preserving order for the final report.
    with concurrent.futures.ThreadPoolExecutor(max_workers=10) as executor:
        future_map = {
            executor.submit(analyze_one, index, url, first_seen_by_url.get(url)): index
            for index, url in enumerate(urls, start=1)
        }
        results: dict[int, AuditRow] = {}
        for future in concurrent.futures.as_completed(future_map):
            row = future.result()
            results[row.index] = row

    rows = [results[index] for index in sorted(results)]
    OUTPUT_JSON.write_text(json.dumps([asdict(row) for row in rows], ensure_ascii=False, indent=2), encoding="utf-8")
    OUTPUT_HTML.write_text(build_html(rows), encoding="utf-8")
    print(f"HTML: {OUTPUT_HTML}")
    print(f"JSON: {OUTPUT_JSON}")


if __name__ == "__main__":
    main()
