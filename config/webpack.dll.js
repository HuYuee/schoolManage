const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const path = require('path');
const ROOT = path.resolve(__dirname, '../');

const Libs = {
    // ui: ['antd'],
    base: ["lodash",],
    frame: ["react","react-dom",],
}

const isProEnv = process.env.NODE_ENV === 'production';
const outputPath = isProEnv ? path.resolve(ROOT, 'dist') : path.resolve(ROOT, 'dev'); 
const outDir = isProEnv ? 'dist' : 'dev';

const DllConfig = {
    entry: {...Libs},
    // entry: {
    //     "lib": vendor
    // },
    output: {
        filename: '[name].js',
        path: outputPath,
        library: '[name]',
        publicPath: '/'
    },
    plugins: [
        new webpack.DllPlugin({
            path: path.resolve(ROOT, outputPath, '[name]-manifest.json'),
            name: '[name]',
            context: ROOT
        })
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
}

if (isProEnv) {
    DllConfig.plugins.push(new webpack.optimize.UglifyJsPlugin({
        output: {
            beautify: false,
            comments: false
        },
        compressor: {
            warnings: false
        }
    }))
}

module.exports = DllConfig;