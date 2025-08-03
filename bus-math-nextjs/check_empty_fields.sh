#!/bin/bash

echo "=== CHECKING FOR EMPTY learningObjectives AND keyConcepts FIELDS ==="
echo ""

missing_count=0

for file in $(find src/app/student -name "lesson-data.ts" | sort); do
    has_empty=false
    
    # Check for empty learningObjectives (multiline)
    if grep -Pzo "learningObjectives: \[\s*\]" "$file" >/dev/null 2>&1; then
        if [ "$has_empty" = false ]; then
            echo "❌ $file"
            has_empty=true
            ((missing_count++))
        fi
        echo "   - Empty learningObjectives array"
    fi
    
    # Check for empty keyConcepts (multiline)  
    if grep -Pzo "keyConcepts: \[\s*\]" "$file" >/dev/null 2>&1; then
        if [ "$has_empty" = false ]; then
            echo "❌ $file"
            has_empty=true
            ((missing_count++))
        fi
        echo "   - Empty keyConcepts array"
    fi
done

echo ""
echo "=== SUMMARY ==="
echo "Files with missing data: $missing_count"