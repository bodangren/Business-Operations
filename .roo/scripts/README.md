# Build Scripts

This directory contains scripts for building and processing the textbook content.

## Files

- `build.sh`: Main build script
- `lint.sh`: Linting script
- `image-processing.sh`: Script for processing images
- `generate-toc.sh`: Script to generate table of contents

## Build Script

The `build.sh` script should handle the main build process:

```bash
#!/bin/bash

# Build script for the Business Math & Finance textbook

# Set variables
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
BUILD_DIR="$PROJECT_ROOT/build"
PDF_DIR="$BUILD_DIR/pdf"
HTML_DIR="$BUILD_DIR/html"
PANDOC_CONFIG_DIR="$PROJECT_ROOT/.roo/pandoc"

# Create build directories
mkdir -p "$PDF_DIR"
mkdir -p "$HTML_DIR"

# Build PDF
echo "Building PDF..."
pandoc --defaults="$PANDOC_CONFIG_DIR/pdf-config.yaml" \
  --output="$PDF_DIR/business-math-finance.pdf" \
  "$PROJECT_ROOT/frontmatter/"*.md \
  "$PROJECT_ROOT/semester1/"*/*.md \
  "$PROJECT_ROOT/semester2/"*/*.md \
  "$PROJECT_ROOT/appendices/"*/*.md

# Build HTML
echo "Building HTML..."
pandoc --defaults="$PANDOC_CONFIG_DIR/html-config.yaml" \
  --output="$HTML_DIR/business-math-finance.html" \
  "$PROJECT_ROOT/frontmatter/"*.md \
  "$PROJECT_ROOT/semester1/"*/*.md \
  "$PROJECT_ROOT/semester2/"*/*.md \
  "$PROJECT_ROOT/appendices/"*/*.md

echo "Build complete!"
```

## Lint Script

The `lint.sh` script should check for consistent formatting:

```bash
#!/bin/bash

# Lint script for the Business Math & Finance textbook

# Set variables
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
LINT_CONFIG_DIR="$PROJECT_ROOT/.roo/lint"

# Check if markdownlint is installed
if ! command -v markdownlint &> /dev/null; then
  echo "markdownlint is not installed. Please install it with 'npm install -g markdownlint-cli'."
  exit 1
fi

# Lint Markdown files
echo "Linting Markdown files..."
markdownlint --config "$LINT_CONFIG_DIR/markdownlint.json" \
  "$PROJECT_ROOT/frontmatter/"*.md \
  "$PROJECT_ROOT/semester1/"*/*.md \
  "$PROJECT_ROOT/semester2/"*/*.md \
  "$PROJECT_ROOT/appendices/"*/*.md

# Check YAML frontmatter
echo "Checking YAML frontmatter..."
# This would require a custom script to validate YAML against the schema

echo "Lint complete!"
```

## Image Processing Script

The `image-processing.sh` script should handle image optimization:

```bash
#!/bin/bash

# Image processing script for the Business Math & Finance textbook

# Set variables
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
ASSETS_DIR="$PROJECT_ROOT/assets/images"

# Check if ImageMagick is installed
if ! command -v convert &> /dev/null; then
  echo "ImageMagick is not installed. Please install it to process images."
  exit 1
fi

# Process images
echo "Processing images..."
find "$ASSETS_DIR" -type f \( -name "*.png" -o -name "*.jpg" -o -name "*.jpeg" \) -print0 | while IFS= read -r -d '' img; do
  echo "Processing $img..."
  # Resize large images
  width=$(identify -format "%w" "$img")
  if [ "$width" -gt 1200 ]; then
    convert "$img" -resize 1200x "$img"
    echo "Resized $img to 1200px width"
  fi
  # Optimize images
  if [[ "$img" == *.png ]]; then
    pngquant --force --quality=65-80 --ext=.png "$img"
  elif [[ "$img" == *.jpg || "$img" == *.jpeg ]]; then
    jpegoptim --max=80 "$img"
  fi
done

echo "Image processing complete!"
```

## Generate TOC Script

The `generate-toc.sh` script should generate a table of contents:

```bash
#!/bin/bash

# Generate table of contents script for the Business Math & Finance textbook

# Set variables
PROJECT_ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/../.." && pwd)"
TOC_FILE="$PROJECT_ROOT/frontmatter/toc.md"

# Generate TOC
echo "Generating table of contents..."
echo "# Table of Contents" > "$TOC_FILE"
echo "" >> "$TOC_FILE"

# Add semester 1 units
echo "## Semester 1: Mini-Projects" >> "$TOC_FILE"
echo "" >> "$TOC_FILE"
for unit in "$PROJECT_ROOT/semester1/"*/; do
  unit_name=$(basename "$unit")
  title=$(grep -m 1 "title:" "$unit/index.md" | sed 's/title: *//' | sed 's/"//g')
  echo "- [$title](../semester1/$unit_name/index.md)" >> "$TOC_FILE"
done
echo "" >> "$TOC_FILE"

# Add semester 2 weeks
echo "## Semester 2: Capstone Project" >> "$TOC_FILE"
echo "" >> "$TOC_FILE"
for week in "$PROJECT_ROOT/semester2/"*/; do
  week_name=$(basename "$week")
  title=$(grep -m 1 "title:" "$week/index.md" | sed 's/title: *//' | sed 's/"//g')
  echo "- [$title](../semester2/$week_name/index.md)" >> "$TOC_FILE"
done
echo "" >> "$TOC_FILE"

# Add appendices
echo "## Appendices" >> "$TOC_FILE"
echo "" >> "$TOC_FILE"
for appendix in "$PROJECT_ROOT/appendices/"*/; do
  appendix_name=$(basename "$appendix")
  title=$(grep -m 1 "title:" "$appendix/index.md" | sed 's/title: *//' | sed 's/"//g')
  echo "- [$title](../appendices/$appendix_name/index.md)" >> "$TOC_FILE"
done

echo "Table of contents generated at $TOC_FILE"