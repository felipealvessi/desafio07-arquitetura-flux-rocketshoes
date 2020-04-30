module.exports = {
    "env": {
        "es6": true
    },
    "extends": [
        "airbnb",
        "prettier",
        "prettier/react"
    ],
    "globals": {
        "Atomics": "readonly",
        "SharedArrayBuffer": "readonly",
        "__DEV__": "readonly"
    },
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "ecmaVersion": 2018,
        "sourceType": "module"
    },
    "plugins": [
        "react",
        "prettier"
    ],
    "rules": {
      "prettier/prettier": "error",
      "react/jsx-filename-extension": [
        "warn",
        {
          extensions: [".jsx", ".js"]
        }
      ],
      "import/prefer-default-export": "off",
      "no-console": ["error", { allow: ["tron"] }],
      "no-param-reassign": [2, { "props": false }],
      "react/jsx-props-no-spreading": "off"
    }
};