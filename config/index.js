'use strict';

const path = require('path');

const merge = require('webpack-merge');
const ENV_ROUTE = process.env.route;

const buildList = {
    index: path.resolve(__dirname, `../dist/${ENV_ROUTE}/index.html`),
    assetsRoot: path.resolve(__dirname, `../dist/${ENV_ROUTE}`),
    assetsSubDirectory: './static',
    assetsPublicPath: `../${ENV_ROUTE}`,
    productionSourceMap: false,
    devtool: '#source-map',
    productionGzip: false,
    productionGzipExtensions: [ 'js', 'css', ],
    bundleAnalyzerReport: process.env.npm_config_report,
};
let buildRouteConfig = {};
buildRouteConfig[ENV_ROUTE] = buildList;

module.exports = merge(buildRouteConfig, {
    dev: {
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {},

        host: 'localhost',
        port: 8080,
        autoOpenBrowser: false,
        errorOverlay: true,
        notifyOnErrors: true,
        poll: false,
        useEslint: true,
        showEslintErrorsInOverlay: false,

        devtool: 'cheap-module-eval-source-map',

        cacheBusting: true,

        cssSourceMap: true,
    },

    build: merge(buildList, {
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
    }),
});
