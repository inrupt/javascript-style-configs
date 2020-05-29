/*
Copyright 2020 Inrupt Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the
Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED,
INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A
PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION
OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/

module.exports = {
  env: {
    browser: true,
    es6: true,
  },

  // Airbnb base provides many style rules; it is then overridden by our current defaults
  // (jest, eslint, typescript, and finally prettier recommended configs.)
  extends: [
    "airbnb-base",
    "eslint:recommended",
    "plugin:jest/recommended",
    "plugin:jest/style",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended",
    "prettier/@typescript-eslint"
  ],

  // Set up es6 and typescript linting, and add lint rules for jest
  plugins: [
    "@typescript-eslint",
    "jest",
    "prettier",
  ],

  // A few fixes for broken .eslint rules
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },

  parser: "@typescript-eslint/parser",

  // Load typescript rules to handle es6 and typescript
  parserOptions: {
    project: "./tsconfig.json",
    ecmaVersion: 2018,
    sourceType: "module",
  },

  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", ".ts"],
      },
    },
  },

  rules: {
    // Make everything work with .ts and .tsx as well
    "import/extensions": [2, {
      js: "never",
      ts: "never",
      tsx: "never",
    }],

    // Allow devDeps in test files
    "import/no-extraneous-dependencies": [0, {
      "devDependencies": ["**/*.test.ts", "**/*.test.tsx"],
    }],

    "prettier/prettier": "error",

    // Allow empty arrow functions, useful as defaults or for testing mocks
    "@typescript-eslint/no-empty-function": [
      "error", { "allow": ["arrowFunctions"] }
    ],
    "@typescript-eslint/no-floating-promises": "error",
  },
}
