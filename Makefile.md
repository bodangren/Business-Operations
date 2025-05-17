# Makefile Documentation

This file describes the Makefile that would be used to build the Business Math & Finance textbook. In a real implementation, this would be a regular Makefile, but since we're limited to creating Markdown files in architect mode, this file serves as documentation for what the Makefile should contain.

## Makefile

```makefile
# Makefile for Business Math & Finance Textbook

# Variables
PROJECT_ROOT := $(shell pwd)
BUILD_DIR := $(PROJECT_ROOT)/build
PDF_DIR := $(BUILD_DIR)/pdf
HTML_DIR := $(BUILD_DIR)/html
PANDOC_CONFIG_DIR := $(PROJECT_ROOT)/.roo/pandoc
SCRIPTS_DIR := $(PROJECT_ROOT)/.roo/scripts

# Phony targets
.PHONY: all pdf html lint clean

# Default target
all: pdf html

# Build PDF
pdf:
	@echo "Building PDF..."
	@mkdir -p $(PDF_DIR)
	@bash $(SCRIPTS_DIR)/generate-toc.sh
	@pandoc --defaults=$(PANDOC_CONFIG_DIR)/pdf-config.yaml \
		--output=$(PDF_DIR)/business-math-finance.pdf \
		$(PROJECT_ROOT)/frontmatter/*.md \
		$(PROJECT_ROOT)/semester1/*/*.md \
		$(PROJECT_ROOT)/semester2/*/*.md \
		$(PROJECT_ROOT)/appendices/*/*.md

# Build HTML
html:
	@echo "Building HTML..."
	@mkdir -p $(HTML_DIR)
	@bash $(SCRIPTS_DIR)/generate-toc.sh
	@pandoc --defaults=$(PANDOC_CONFIG_DIR)/html-config.yaml \
		--output=$(HTML_DIR)/business-math-finance.html \
		$(PROJECT_ROOT)/frontmatter/*.md \
		$(PROJECT_ROOT)/semester1/*/*.md \
		$(PROJECT_ROOT)/semester2/*/*.md \
		$(PROJECT_ROOT)/appendices/*/*.md

# Process images
images:
	@echo "Processing images..."
	@bash $(SCRIPTS_DIR)/image-processing.sh

# Lint Markdown files
lint:
	@echo "Linting Markdown files..."
	@bash $(SCRIPTS_DIR)/lint.sh

# Clean build directory
clean:
	@echo "Cleaning build directory..."
	@rm -rf $(BUILD_DIR)

# Create a new unit
new-unit:
	@read -p "Enter unit number (1-8): " unit_num; \
	read -p "Enter unit title: " unit_title; \
	unit_slug=$$(echo $$unit_title | tr '[:upper:]' '[:lower:]' | tr ' ' '-'); \
	mkdir -p $(PROJECT_ROOT)/semester1/unit$$unit_num-$$unit_slug; \
	mkdir -p $(PROJECT_ROOT)/semester1/unit$$unit_num-$$unit_slug/examples; \
	mkdir -p $(PROJECT_ROOT)/semester1/unit$$unit_num-$$unit_slug/exercises; \
	mkdir -p $(PROJECT_ROOT)/semester1/unit$$unit_num-$$unit_slug/images; \
	mkdir -p $(PROJECT_ROOT)/semester1/unit$$unit_num-$$unit_slug/excel; \
	cp $(PROJECT_ROOT)/.roo/templates/unit-template.md $(PROJECT_ROOT)/semester1/unit$$unit_num-$$unit_slug/index.md; \
	sed -i "s/Unit Title/$$unit_title/g" $(PROJECT_ROOT)/semester1/unit$$unit_num-$$unit_slug/index.md; \
	sed -i "s/unit: 1/unit: $$unit_num/g" $(PROJECT_ROOT)/semester1/unit$$unit_num-$$unit_slug/index.md; \
	echo "Created unit $$unit_num: $$unit_title"

# Create a new week
new-week:
	@read -p "Enter week number (1-13): " week_num; \
	read -p "Enter week title: " week_title; \
	week_slug=$$(echo $$week_title | tr '[:upper:]' '[:lower:]' | tr ' ' '-'); \
	mkdir -p $(PROJECT_ROOT)/semester2/week$$week_num-$$week_slug; \
	mkdir -p $(PROJECT_ROOT)/semester2/week$$week_num-$$week_slug/examples; \
	mkdir -p $(PROJECT_ROOT)/semester2/week$$week_num-$$week_slug/exercises; \
	mkdir -p $(PROJECT_ROOT)/semester2/week$$week_num-$$week_slug/images; \
	mkdir -p $(PROJECT_ROOT)/semester2/week$$week_num-$$week_slug/excel; \
	mkdir -p $(PROJECT_ROOT)/semester2/week$$week_num-$$week_slug/rubrics; \
	cp $(PROJECT_ROOT)/.roo/templates/unit-template.md $(PROJECT_ROOT)/semester2/week$$week_num-$$week_slug/index.md; \
	sed -i "s/Unit Title/$$week_title/g" $(PROJECT_ROOT)/semester2/week$$week_num-$$week_slug/index.md; \
	sed -i "s/unit: 1/week: $$week_num/g" $(PROJECT_ROOT)/semester2/week$$week_num-$$week_slug/index.md; \
	sed -i "s/semester: 1/semester: 2/g" $(PROJECT_ROOT)/semester2/week$$week_num-$$week_slug/index.md; \
	echo "Created week $$week_num: $$week_title"

# Create a new exercise
new-exercise:
	@read -p "Enter semester (1 or 2): " semester_num; \
	if [ $$semester_num -eq 1 ]; then \
		read -p "Enter unit number (1-8): " unit_num; \
		read -p "Enter unit slug (e.g., smart-ledger): " unit_slug; \
		dir="semester1/unit$$unit_num-$$unit_slug"; \
	else \
		read -p "Enter week number (1-13): " week_num; \
		read -p "Enter week slug (e.g., concept-proposal): " week_slug; \
		dir="semester2/week$$week_num-$$week_slug"; \
	fi; \
	read -p "Enter exercise number: " exercise_num; \
	read -p "Enter exercise title: " exercise_title; \
	cp $(PROJECT_ROOT)/.roo/templates/exercise-template.md $(PROJECT_ROOT)/$$dir/exercises/exercise$$exercise_num.md; \
	sed -i "s/Exercise Title/$$exercise_title/g" $(PROJECT_ROOT)/$$dir/exercises/exercise$$exercise_num.md; \
	if [ $$semester_num -eq 1 ]; then \
		sed -i "s/unit: 1/unit: $$unit_num/g" $(PROJECT_ROOT)/$$dir/exercises/exercise$$exercise_num.md; \
	else \
		sed -i "s/unit: 1/week: $$week_num/g" $(PROJECT_ROOT)/$$dir/exercises/exercise$$exercise_num.md; \
		sed -i "s/semester: 1/semester: 2/g" $(PROJECT_ROOT)/$$dir/exercises/exercise$$exercise_num.md; \
	fi; \
	echo "Created exercise $$exercise_num: $$exercise_title in $$dir"
```

## Usage

In a real implementation, this Makefile would be used to:

1. Build the PDF and HTML versions of the textbook
2. Process images for optimal display
3. Lint Markdown files for consistent formatting
4. Clean the build directory
5. Create new units, weeks, and exercises using templates

To use the Makefile, you would run commands like:

```bash
# Build both PDF and HTML versions
make all

# Build only the PDF version
make pdf

# Build only the HTML version
make html

# Process images
make images

# Lint Markdown files
make lint

# Clean the build directory
make clean

# Create a new unit
make new-unit

# Create a new week
make new-week

# Create a new exercise
make new-exercise