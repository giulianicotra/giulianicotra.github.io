#!/bin/bash

# Cartella contenente le immagini
SOURCE_DIR="./oltre"   # cambia con la tua cartella
# Cartella di destinazione
DEST_DIR="./webp"

# Crea la cartella di destinazione se non esiste
mkdir -p "$DEST_DIR"

# Loop su tutti i file immagine nella cartella
for img in "$SOURCE_DIR"/*.{png,jpg,jpeg}; do
  # Controlla se il file esiste (gestisce il caso in cui non ci siano immagini)
  [ -e "$img" ] || continue

  # Estrae il nome senza estensione
  filename=$(basename "$img")
  name="${filename%.*}"

  # Conversione in WebP
  convert "$img" "$DEST_DIR/$name.webp"

  echo "Convertito: $img -> $DEST_DIR/$name.webp"
done

echo "Conversione completata!"
