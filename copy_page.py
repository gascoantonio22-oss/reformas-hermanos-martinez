import os
import shutil

origin_html = "/Users/antonio/Desktop/Reformas de cocinas integrales en Madrid _ Diseño y Ejecución Completa.html"
origin_files = "/Users/antonio/Desktop/Reformas de cocinas integrales en Madrid _ Diseño y Ejecución Completa_files"
dest_html = "/Users/antonio/Desktop/antigua.html"
dest_files = "/Users/antonio/Desktop/antigua_files"

# Verify origin exists (using normalized paths to handle macOS unicode normalization forms if needed)
import glob
html_candidates = glob.glob("/Users/antonio/Desktop/Reformas de cocinas*.html")
files_candidates = glob.glob("/Users/antonio/Desktop/Reformas de cocinas*_files")

if html_candidates:
    origin_html = html_candidates[0]
if files_candidates:
    origin_files = files_candidates[0]

# We need the exact folder name to replace in the HTML
folder_name_to_replace = os.path.basename(origin_files)

# 1. Clean old destination files
if os.path.exists(dest_files):
    shutil.rmtree(dest_files)

# 2. Copy the files folder
shutil.copytree(origin_files, dest_files)

# 3. Read HTML and replace folder references
with open(origin_html, 'r', encoding='utf-8') as file:
    content = file.read()

# Replace URL references 
# Wait, some browsers save with url encoded folder names like "Reformas%20de..."
import urllib.parse
folder_name_encoded = urllib.parse.quote(folder_name_to_replace)

new_content = content.replace(folder_name_to_replace, "antigua_files")
new_content = new_content.replace(folder_name_encoded, "antigua_files")

with open(dest_html, 'w', encoding='utf-8') as file:
    file.write(new_content)

print("Copy completed successfully.")
