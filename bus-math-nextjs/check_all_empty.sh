#!/bin/bash

echo "Checking ALL lesson files for empty arrays..."

for file in src/app/student/unit*/lesson*/lesson-data.ts; do
  if [ -f "$file" ]; then
    has_empty_objectives=$(grep -A 2 "learningObjectives: \[" "$file" | grep -c "^  \]$")
    has_empty_concepts=$(grep -A 2 "keyConcepts: \[" "$file" | grep -c "^  \]$")
    
    if [ "$has_empty_objectives" -gt 0 ] || [ "$has_empty_concepts" -gt 0 ]; then
      echo "EMPTY ARRAYS: $file"
      if [ "$has_empty_objectives" -gt 0 ]; then
        echo "  - learningObjectives: []"
      fi
      if [ "$has_empty_concepts" -gt 0 ]; then
        echo "  - keyConcepts: []"
      fi
    fi
  fi
done