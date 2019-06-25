'use strict';
const path = require('path');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const packageConfig = require('../package.json');

// 根据路由进行配置
let routePathRoot = config.build.assetsRoot;
let routePathSubDirectory = config.build.assetsSubDirectory;
let routeAssetsPublicPath = config.build.assetsPublicPath;
let routeEntry = './src/main.js';
let templatePath = 'index.html';
let filename = config.build.index;
const ENV_ROUTE = process.env.route;
if (ENV_ROUTE) {
    routePathRoot = config[ENV_ROUTE].assetsRoot;
    routePathSubDirectory = config[ENV_ROUTE].assetsSubDirectory;
    routeAssetsPublicPath = config[ENV_ROUTE].assetsPublicPath;
    routeEntry = `./src/page/${ENV_ROUTE}/main.js`;
    templatePath = path.resolve(__dirname, `../src/page/${ENV_ROUTE}/index.html`);
    filename = config[ENV_ROUTE].index;
}

exports.assetsPath = function(_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production' ? routePathSubDirectory : config.dev.assetsSubDirectory;

    return path.posix.join(assetsSubDirectory, _path);
};

exports.routePathRoot = routePathRoot;
exports.routePathSubDirectory = routePathSubDirectory;
exports.routeAssetsPublicPath = routeAssetsPublicPath;
exports.routeEntry = routeEntry;
exports.templatePath = templatePath;
exports.filename = filename;

exports.cssLoaders = function (options) {
    options = options || {};

    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: options.sourceMap,
        },
    };

    const postcssLoader = {
        loader: 'postcss-loader',
        options: {
            sourceMap: options.sourceMap,
        },
    };

    function generateLoaders (loader, loaderOptions) {
        const loaders = options.usePostCSS ? [ cssLoader, postcssLoader, ] : [ cssLoader, ];

        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: options.sourceMap,
                }),
            });
        }

        if (options.extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: 'vue-style-loader',
            });
        } else {
            return [ 'vue-style-loader', ].concat(loaders);
        }
    }

    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true, }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus'),
    };
};

exports.styleLoaders = function (options) {
    const output = [];
    const loaders = exports.cssLoaders(options);

    for (const extension in loaders) {
        const loader = loaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader,
        });
    }

    return output;
};

exports.createNotifierCallback = () => {
    const notifier = require('node-notifier');

    return (severity, errors) => {
        if (severity !== 'error') return;

        const error = errors[0];
        const filename = error.file && error.file.split('!').pop();

        notifier.notify({
            title: packageConfig.name,
            message: severity + ': ' + error.name,
            subtitle: filename || '',
            icon: path.join(__dirname, 'logo.png'),
        });
    };
};
