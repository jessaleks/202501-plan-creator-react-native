module.exports = function (api) {
    api.cache(true);
    return {
        presets: ['babel-preset-expo'],
        plugins: [
            [
                "module-resolver",
                {
                    alias: {
                        "better-auth/react": "path/to/node_modules/better-auth/dist/react.js"
                        "@better-auth/expo/client": "path/to/node_modules/@better-auth/expo/dist/client.js",
                    },
                    extensions: [".js", ".jsx", ".ts", ".tsx"],
                },
            ],
        ],
    };
};
