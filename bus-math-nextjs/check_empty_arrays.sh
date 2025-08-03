#!/bin/bash

echo "Checking for empty learningObjectives and keyConcepts arrays..."

for unit in unit02 unit03 unit04 unit05 unit06 unit07 unit08; do
  for lesson in lesson04 lesson05 lesson08 lesson09 lesson10; do
    file="src/app/student/${unit}/${lesson}/lesson-data.ts"
    if [ -f "$file" ]; then
      if grep -A 2 "learningObjectives: \[" "$file" | grep -q "^  \]$"; then
        echo "EMPTY: $file (learningObjectives)"
      fi
      if grep -A 2 "keyConcepts: \[" "$file" | grep -q "^  \]$"; then
        echo "EMPTY: $file (keyConcepts)"
      fi
    fi
  done
done