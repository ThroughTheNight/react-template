module.exports = {
  "env": {
    "browser": true,
    "es6": true
  },
  "globals": {
    "Atomics": "readonly",
    "SharedArrayBuffer": "readonly",
    "_": true,
    "$": true,
  },
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true,
      "tsx": true
    },
    "ecmaVersion": 2018,
    "sourceType": "module"
  },
  "rules": {
    "camelcase": 0,
    "react/prop-types": 0,
    "no-irregular-whitespace": 0,
    "import/prefer-default-export": 0,
    "react/jsx-props-no-spreading": 0,
    "react/destructuring-assignment": 0,
    "@typescript-eslint/explicit-function-return-type": 0,
    "@typescript-eslint/explicit-module-boundary-types": 0,
    "semi": 1,
    "no-console": 1,
    "react-hooks/exhaustive-deps": 1,
    "@typescript-eslint/no-explicit-any": 1,
    "no-unused-vars": [
        1,
        {
          vars: "all",
          args: "after-used",
          ignoreRestSiblings: true,
          varsIgnorePattern: "^_|^[A-Z]",
          argsIgnorePattern: "^_|^err|^ev"
        }
      ],
    "no-empty": 2,
    "no-extra-semi": 2,
    "no-spaced-func": 2,
    "no-useless-escape": 2,
    "no-trailing-spaces": 2,
    "react-hooks/rules-of-hooks": 2,
    "func-call-spacing": [2, "never"],
    "space-before-blocks": [2,"always"],
    "semi-spacing": [2, { "before": false, "after": true }],
  },
  parser: "@typescript-eslint/parser",
  extends: ["plugin:@typescript-eslint/recommended"],
  plugins: ["@typescript-eslint", "react", "react-hooks"],
};
