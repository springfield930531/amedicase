# Instrucțiuni pentru încărcarea imaginilor

## Metoda 1: ZIP (Recomandat)
1. Creează un ZIP cu toate imaginile
2. Încarcă ZIP-ul în /root/amedicase/frontend/assets.zip
3. Eu voi extrage și configura automat

## Metoda 2: Direct în public/
Folosește scp sau rsync:
```bash
scp -r images/* user@server:/root/amedicase/frontend/public/
```

## Structură recomandată:
- Logo: public/logo.svg sau public/logo.png
- Hero: public/hero-bg.jpg
- Team: public/team/*.jpg
- Icons: public/icons/*.svg
- General: public/images/*.{jpg,png,webp}
