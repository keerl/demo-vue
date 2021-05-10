const webpack = require('@nativescript/webpack');

const { DefinePlugin } = require('webpack');

module.exports = (env) => {
    webpack.init(env);

    const { development } = env;

    webpack.chainWebpack((config) => {
        config.plugin('DefinePlugin').tap((args) => {
            Object.assign(args[0], {
                isDevelopment: development
            });
            return args;
        });
    });

    return webpack.resolveConfig();
};
