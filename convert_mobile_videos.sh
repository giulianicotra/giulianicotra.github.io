#!/bin/bash

# Cartelle
INPUT_DIR="videos/original"
OUTPUT_DIR="videos/mobile"

# Crea cartella output se non esiste
mkdir -p "$OUTPUT_DIR"

# Loop su tutti i file video
for input in "$INPUT_DIR"/*; do
  # Nome file senza percorso
  filename=$(basename "$input")
  
  # File di output
  output="$OUTPUT_DIR/$filename"

  echo "Converting $filename -> $output ..."

  ffmpeg -i "$input" \
    -c:v libx264 \
    -profile:v baseline \
    -level 3.0 \
    -pix_fmt yuv420p \
    -movflags +faststart \
    -vf "scale='min(720,iw)':-2" \
    -c:a aac -b:a 128k \
    -y "$output"
done

echo "✅ Conversione completata! I video mobile-friendly sono in $OUTPUT_DIR"
