# What Happens When TypeScript Compiles Your Code

## Type Checking

First, `tsc` reads our files and checks every type. If we pass a string where a number is expected, it shows an error before the code ever runs.

```ts
function double(value: number): number {
  return value * 2;
}

double("10"); // Error: string is not assignable to number
```

## Type Erasure

After checking, `tsc` removes all the type information. Interfaces, type aliases and type annotations simply disappear, because JavaScript has no idea what they are. This means types give us no protection at runtime.

```js
// compiled output
function double(value) {
  return value * 2;
}
```

## Emitting JavaScript

Finally, `tsc` writes `.js` files. It can also convert modern syntax into older syntax, so the code works in older environments.

## The Role of tsconfig.json

`tsconfig.json` is the settings file for the compiler. Instead of typing options in the terminal every time, we write them once here.

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "strict": true,
    "outDir": "dist"
  },
  "include": ["src"]
}
```

`target` decides which JavaScript version is produced, `strict` turns on stronger checks, `outDir` sets where the output goes, and `include` tells which files to compile.
