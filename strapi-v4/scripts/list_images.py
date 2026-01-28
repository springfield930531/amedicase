import os
import mimetypes

PROJECT_ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..'))
FRONTEND_IMAGES = os.path.abspath(os.path.join(PROJECT_ROOT, '..', 'frontend', 'public', 'images'))

if not os.path.isdir(FRONTEND_IMAGES):
    print(f"Frontend images folder not found: {FRONTEND_IMAGES}")
    raise SystemExit(1)

for root, _, files in os.walk(FRONTEND_IMAGES):
    for name in files:
        path = os.path.join(root, name)
        rel = os.path.relpath(path, FRONTEND_IMAGES)
        mime = mimetypes.guess_type(path)[0] or 'application/octet-stream'
        print(f"{rel}\t{mime}")
