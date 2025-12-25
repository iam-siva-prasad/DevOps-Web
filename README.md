
# DevOps Demo Site (Docker Only)

This package contains a static multi-page website with a live temperature widget and Docker/Nginx setup.

## Contents
- index.html, features.html, contact.html
- assets/ (styles.css, app.js)
- nginx.conf
- Dockerfile

## Run locally (without Docker)
```bash
python3 -m http.server 8080
# then open http://localhost:8080
```

## Build & Run with Docker
```bash
docker build -t yourname/devops-demo:1.0 .
docker run -it --rm -p 8080:80 yourname/devops-demo:1.0
# open http://localhost:8080
```

## Notes
- Temperature widget uses Open-Meteo (no API key). If geolocation is denied, it falls back to Nellore coordinates.
- Edit HTML/CSS/JS and rebuild with a new tag to practice image versioning.
