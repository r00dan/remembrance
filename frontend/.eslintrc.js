module.exports = {
    root: true,
    env: {
        "browser": true,
        "es2021": true
    },
    extends: [
        "plugin:react/recommended",
        "airbnb"
    ],
    globals: {
        "React": "readonly",
        "JSX": "readonly"
    },
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaFeatures: {
            jsx: false
        },
        ecmaVersion: 12,
        sourceType: "module",
        tsconfigRootDir : __dirname,
        project: ["./tsconfig.json"],
    },
    plugins: [
        "@typescript-eslint",
        "react"
    ],
    rules: {
        "linebreak-style": "off",
        "no-use-before-define": "off",
        "camelcase": "off",
        "no-shadow": "off",
        "no-plusplus": "off",
        "no-irregular-whitespace": "off",
        "no-unused-expressions": "off",
        "no-unused-vars": "off",
        "no-unsafe-return": "off",
        "no-empty-function": "error",
        "max-len": ["error", { "code": 130, "ignoreComments": true, "ignoreStrings": true }],
        "no-nested-ternary": "off",
        "no-unneeded-ternary": "error",
        "no-duplicate-imports": "error",
        "import/prefer-default-export": "off",
        "import/extensions": "off",
        "import/no-unresolved": "off",
        "react/require-default-props": "off",
        "react/button-has-type": "off",
        "react/react-in-jsx-scope": "off",
        "react/jsx-curly-brace-presence": "off",
        "react/jsx-filename-extension": "off",
        "react/jsx-one-expression-per-line": "off",
        "jsx-a11y/click-events-have-key-events": "off",
        "jsx-a11y/mouse-events-have-key-events": "off",
        "jsx-a11y/no-static-element-interactions": "off",
        "react/jsx-props-no-spreading": "off",
        "jsx-a11y/label-has-associated-control": "off",
        "jsx-a11y/no-noninteractive-element-interactions": "off",
        "@typescript-eslint/no-explicit-any": "error",
        "@typescript-eslint/no-unused-vars": "error",
        "@typescript-eslint/no-unused-expressions": "error",
        "@typescript-eslint/no-use-before-define": "error",
        "@typescript-eslint/no-duplicate-imports": "error",
        "@typescript-eslint/no-unsafe-return": "error"
    }
}

