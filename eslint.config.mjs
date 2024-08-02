import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import eslintConfigPrettier from "eslint-config-prettier";

export default [
    {
        ignores: ["node_modules/", "dist/", "build/"],
    },
    {
        files: ["**/*.js", "**/*.jsx"],
        languageOptions: {
            ecmaVersion: "latest",
            sourceType: "module",
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
            globals: {
                browser: true,
                node: true,
            },
        },
        plugins: {
            prettier,
        },
        rules: {
            "prettier/prettier": "error",
            indent: ["error", 2],
            "linebreak-style": ["error", "unix"],
            quotes: ["error", "single"],
            semi: ["error", "always"],
        },
    },
];
