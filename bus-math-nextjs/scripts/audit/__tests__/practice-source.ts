import fs from 'node:fs'
import vm from 'node:vm'
import ts from 'typescript'

/**
 * Run selected practice declarations without the page shell.
 * @param file - Source file to read.
 * @param names - Declarations needed by the calculation.
 * @param expression - Independent calculation or validator call to execute.
 * @param globals - Inputs and deterministic runtime values.
 * @returns The result of the expression.
 */
export function evaluatePractice<T>(file: string, names: string[], expression: string, globals: Record<string, unknown> = {}): T {
  const ast = ts.createSourceFile(file, fs.readFileSync(file, 'utf8'), ts.ScriptTarget.Latest, true)
  const declarations = new Map<string, string>()
  function visit(node: ts.Node) {
    if (ts.isFunctionDeclaration(node) && node.name && names.includes(node.name.text)) {
      declarations.set(node.name.text, node.getText(ast))
    }
    if (ts.isVariableDeclaration(node) && ts.isIdentifier(node.name) && names.includes(node.name.text)) {
      declarations.set(node.name.text, `const ${node.getText(ast)};`)
    }
    ts.forEachChild(node, visit)
  }
  visit(ast)
  for (const name of names) {
    if (!declarations.has(name)) throw new Error(`Missing declaration: ${file}:${name}`)
  }
  const source = [...declarations.values()].join('\n') + `\nglobalThis.result = (${expression});`
  const javascript = ts.transpileModule(source, { compilerOptions: { target: ts.ScriptTarget.ES2022, jsx: ts.JsxEmit.ReactJSX } }).outputText
  const context = { Math, ...globals, result: undefined as T | undefined }
  vm.runInNewContext(javascript, context, { timeout: 5000 })
  return context.result as T
}

/**
 * Supply repeatable random draws for generator regression checks.
 * @param draws - Initial values to return.
 * @param fallback - Value to use after the initial values.
 * @returns A Math object with a deterministic random function.
 */
export function fixedMath(draws: number[], fallback = 0.5): Math {
  let index = 0
  const math = Object.create(Math) as Math
  math.random = () => draws[index++] ?? fallback
  return math
}
