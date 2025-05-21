# Project LaTeX Structure Overview

This document outlines the LaTeX file structure for the "Math for Business Operations" textbook.

## Core Concepts:

1.  **Overall Book Compilation (`book_main.tex`):**
    *   The main entry point for compiling the entire textbook is [`book_main.tex`](book_main.tex) in the root directory.
    *   This file uses `\input{}` commands to pull in the major sections of the book in sequence (frontmatter, units, capstone, backmatter).

2.  **Individual Unit Structure (e.g., `units/unit01_smart_ledger_launch/`):**
    *   Each unit has a primary file, e.g., [`unit01.tex`](units/unit01_smart_ledger_launch/unit01.tex).
    *   This `unitXX.tex` file then `\input`s its constituent parts (01_intro.tex, 02_concepts.tex, etc.), which are standardized across units.

3.  **Standalone Section Compilation (using `main.tex` files within section directories):**
    *   Each major section directory (frontmatter, each unit, capstone, backmatter) contains its own `main.tex` file (e.g., [`units/unit01_smart_ledger_launch/main.tex`](units/unit01_smart_ledger_launch/main.tex)).
    *   These `main.tex` files are intended for independent compilation of that specific section. They will include the necessary LaTeX preamble (documentclass, packages, etc.) and then `\input` the primary content file for that section (e.g., the unit's `main.tex` would input the corresponding `unitXX.tex`).

4.  **Varying Structures for Non-Unit Sections:**
    *   The `frontmatter/`, `capstone/`, and `backmatter/` directories have their own internal file structures but still follow the pattern of having a primary content file and a local `main.tex` for individual compilation.

## Workflow Visualization:

```mermaid
graph TD
    Root["[`book_main.tex`](book_main.tex) (Full Book Compilation)"]

    subgraph Frontmatter_Section ["frontmatter/"]
        FM_Main["[`main.tex`](frontmatter/main.tex) (Standalone Frontmatter Compilation)"]
        FM_Content["[`frontmatter.tex`](frontmatter/frontmatter.tex)"]
        FM_Parts["(e.g., [`preface.tex`](frontmatter/preface.tex), [`toc.tex`](frontmatter/toc.tex))"]
        FM_Main --> FM_Content
        FM_Content --> FM_Parts
    end

    subgraph Unit01_Section ["units/unit01_smart_ledger_launch/"]
        U01_Main["[`main.tex`](units/unit01_smart_ledger_launch/main.tex) (Standalone Unit 01 Compilation)"]
        U01_Content["[`unit01.tex`](units/unit01_smart_ledger_launch/unit01.tex)"]
        U01_Intro["[`01_intro.tex`](units/unit01_smart_ledger_launch/01_intro.tex)"]
        U01_Concepts["[`02_concepts.tex`](units/unit01_smart_ledger_launch/02_concepts.tex)"]
        U01_Excel["[`03_excel_model.tex`](units/unit01_smart_ledger_launch/03_excel_model.tex)"]
        U01_Examples["[`04_examples.tex`](units/unit01_smart_ledger_launch/04_examples.tex)"]
        U01_Exercises["[`05_exercises.tex`](units/unit01_smart_ledger_launch/05_exercises.tex)"]
        U01_Summary["[`06_summary.tex`](units/unit01_smart_ledger_launch/06_summary.tex)"]
        U01_Main --> U01_Content
        U01_Content --> U01_Intro
        U01_Content --> U01_Concepts
        U01_Content --> U01_Excel
        U01_Content --> U01_Examples
        U01_Content --> U01_Exercises
        U01_Content --> U01_Summary
    end

    Ellipsis_Units["... (Other Units similarly structured) ..."]

    subgraph Capstone_Section ["capstone/"]
        CS_Main["[`main.tex`](capstone/main.tex) (Standalone Capstone Compilation)"]
        CS_Content["[`capstone.tex`](capstone/capstone.tex)"]
        CS_Parts["(e.g., [`01_guidelines.tex`](capstone/01_guidelines.tex))"]
        CS_Main --> CS_Content
        CS_Content --> CS_Parts
    end

    subgraph Backmatter_Section ["backmatter/"]
        BM_Main["[`main.tex`](backmatter/main.tex) (Standalone Backmatter Compilation)"]
        BM_Content["[`backmatter.tex`](backmatter/backmatter.tex)"]
        BM_Parts["(e.g., [`glossary.tex`](backmatter/glossary.tex), [`bibliography.tex`](backmatter/bibliography.tex))"]
        BM_Main --> BM_Content
        BM_Content --> BM_Parts
    end

    Root --> FM_Content
    Root --> U01_Content
    Root --> Ellipsis_Units
    Root --> CS_Content
    Root --> BM_Content