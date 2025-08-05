#!/usr/bin/env node

const fs = require('fs')
const path = require('path')

const srcDir = path.join(__dirname, '../src')
const componentsDir = path.join(srcDir, 'components')
const outputFile = path.join(__dirname, '../public/components-report.json')

// Categories to ignore (shadcn/ui components)
const ignoredCategories = ['ui']

// Get all custom component files
function getComponentFiles(dir, category = '') {
  const components = []
  const items = fs.readdirSync(dir)
  
  for (const item of items) {
    const fullPath = path.join(dir, item)
    const stat = fs.statSync(fullPath)
    
    if (stat.isDirectory()) {
      // Skip ui directory (shadcn components)
      if (ignoredCategories.includes(item)) {
        continue
      }
      
      const subCategory = category ? `${category}/${item}` : item
      components.push(...getComponentFiles(fullPath, subCategory))
    } else if (item.endsWith('.tsx') || item.endsWith('.ts')) {
      // Skip index files and non-component files
      if (item === 'index.ts' || item === 'index.tsx') {
        continue
      }
      
      const componentName = path.basename(item, path.extname(item))
      components.push({
        name: componentName,
        path: path.relative(srcDir, fullPath),
        category: category || 'root',
        fullPath
      })
    }
  }
  
  return components
}

// Search for component usage in teacher/ and student/ directories
function findComponentUsage(componentName, searchDirs) {
  const usages = []
  
  function searchInDirectory(dir) {
    if (!fs.existsSync(dir)) return
    
    const items = fs.readdirSync(dir, { withFileTypes: true })
    
    for (const item of items) {
      const fullPath = path.join(dir, item.name)
      
      if (item.isDirectory()) {
        searchInDirectory(fullPath)
      } else if (item.name.endsWith('.tsx') || item.name.endsWith('.ts')) {
        try {
          const content = fs.readFileSync(fullPath, 'utf8')
          const lines = content.split('\n')
          
          lines.forEach((line, lineIndex) => {
            // Look for import statements and component usage
            const importRegex = new RegExp(`import.*\\b${componentName}\\b.*from`, 'g')
            const usageRegex = new RegExp(`<${componentName}\\b`, 'g')
            
            if (importRegex.test(line) || usageRegex.test(line)) {
              usages.push({
                file: path.relative(srcDir, fullPath),
                line: lineIndex + 1,
                context: line.trim().substring(0, 100)
              })
            }
          })
        } catch (err) {
          console.warn(`Warning: Could not read file ${fullPath}`)
        }
      }
    }
  }
  
  searchDirs.forEach(searchInDirectory)
  return usages
}

// Main analysis function
function analyzeComponents() {
  console.log('🔍 Discovering custom components...')
  
  // Get all custom components (excluding ui/ directory)
  const components = getComponentFiles(componentsDir)
  console.log(`Found ${components.length} custom components`)
  
  // Search directories
  const searchDirs = [
    path.join(srcDir, 'app/teacher'),
    path.join(srcDir, 'app/student')
  ]
  
  console.log('🔎 Analyzing component usage...')
  
  // Analyze usage for each component
  const componentsWithUsage = components.map((component, index) => {
    if (index % 10 === 0) {
      console.log(`Progress: ${index + 1}/${components.length}`)
    }
    
    const usages = findComponentUsage(component.name, searchDirs)
    
    return {
      ...component,
      usages,
      totalUsages: usages.length
    }
  })
  
  // Generate statistics
  const stats = {
    totalComponents: componentsWithUsage.length,
    totalUsages: componentsWithUsage.reduce((sum, comp) => sum + comp.totalUsages, 0),
    categoryCounts: componentsWithUsage.reduce((acc, comp) => {
      acc[comp.category] = (acc[comp.category] || 0) + 1
      return acc
    }, {})
  }
  
  // Create report data
  const reportData = {
    components: componentsWithUsage,
    lastGenerated: new Date().toISOString(),
    stats
  }
  
  // Ensure public directory exists
  const publicDir = path.dirname(outputFile)
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir, { recursive: true })
  }
  
  // Write report to JSON file
  fs.writeFileSync(outputFile, JSON.stringify(reportData, null, 2))
  
  console.log('✅ Component analysis complete!')
  console.log(`📊 Report saved to: ${path.relative(process.cwd(), outputFile)}`)
  console.log(`📈 Stats:`)
  console.log(`   - Total components: ${stats.totalComponents}`)
  console.log(`   - Total usages: ${stats.totalUsages}`)
  console.log(`   - Unused components: ${componentsWithUsage.filter(c => c.totalUsages === 0).length}`)
  console.log(`   - Categories: ${Object.keys(stats.categoryCounts).join(', ')}`)
}

// Run the analysis
if (require.main === module) {
  analyzeComponents()
}

module.exports = { analyzeComponents }