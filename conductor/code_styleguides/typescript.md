# TypeScript Style Guide

Based on Google TypeScript Style Guide (enforced by gts).

## Language Features
- Use `const` by default, `let` when reassignment needed. **`var` is forbidden.**
- Use ES6 modules (`import`/`export`). **Do not use `namespace`.**
- Use named exports (`export {MyClass};`). **Avoid default exports** except for interactive components.
- Use TypeScript's `private` visibility modifier.
- Mark properties never reassigned outside constructor with `readonly`.
- Use single quotes (`'`) for strings. Use template literals for interpolation.
- Always use triple equals (`===`) and not equals (`!==`).

## Disallowed Features
- **`any` Type:** Avoid. Prefer `unknown` or specific types.
- **Wrapper Objects:** Do not instantiate `String`, `Boolean`, or `Number`.
- **Automatic Semicolon Insertion:** Explicitly end all statements with semicolons.
- **`eval()` and `Function(...string)`:** Forbidden.

## Naming
- **`UpperCamelCase`:** Classes, interfaces, types, enums
- **`lowerCamelCase`:** Variables, parameters, functions, methods, properties
- **`CONSTANT_CASE`:** Global constant values
- **No `_` prefix/suffix** for identifiers

## Type System
- Rely on type inference for simple types. Be explicit for complex types.
- Both `undefined` and `null` supported - be consistent.
- Prefer optional parameters (`?`) over adding `|undefined` to the type.
- Use `T[]` for simple arrays, `Array<T>` for complex union types.
