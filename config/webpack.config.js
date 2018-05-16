const hotMiddlewareScript = "webpack-hot-middleware/client?reload=true";
const path = require('path');
const ROOT = path.resolve(__dirname, '../');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const STATIC = "/";
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack');
const AddAssetHtmlPlugin = require('add-asset-html-webpack-plugin');
const CONST = require('./constant.json');

module.exports = {
    "devtool": "cheap-module-eval-source-map",
    "entry": {
        "index": [
            "babel-polyfill",
            "./src/index.js",
            hotMiddlewareScript
        ]
    },
    "output": {
        "path": path.resolve(ROOT, 'dev'),
        "filename": "[name].[hash:5].js",
        "publicPath": "/"
    },
    "resolve": {
        "extensions": [
            ".jsx",
            ".js",
            ".tsx",
            ".ts"
        ],
        "alias": {
            "src": path.resolve(ROOT, 'src'),
            "components": path.resolve(ROOT, 'src/components'),
            "routes": path.resolve(ROOT, 'src/routes'),
            "containers": path.resolve(ROOT, 'src/containers'),
            "assets": path.resolve(ROOT, 'src/assets'),
            "routers": path.resolve(ROOT, 'src/routers')
        }
    },
    "externals": {},
    "plugins": [
        new OpenBrowserPlugin({
            url: 'http://localhost:3333'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new HtmlWebpackPlugin({
            'filename': 'index.html',
            'template': './src/index.html',
            'inject': 'body',
            'favicon': './src/assets/img/favicon.png',
            'chunks': ['index']
        }),
        new webpack.DllReferencePlugin({
            context: ROOT,
            manifest: require(`../${CONST.devDir}/base-manifest.json`),
            sourceType: 'var'
        }),
        new webpack.DllReferencePlugin({
            context: ROOT,
            manifest: require(`../${CONST.devDir}/frame-manifest.json`),
            sourceType: 'var'
        }),
        new AddAssetHtmlPlugin([{
            filepath: require.resolve(`../${CONST.devDir}/base`),
            includeSourcemap: false,
            hash: true
        }, {
            filepath: require.resolve(`../${CONST.devDir}/frame`),
            includeSourcemap: false,
            hash: true
        }, ])
    ],
    "module": {
        "rules": [{
                "test": /\.less$/,
                "use": [{
                        "loader": "style-loader"
                    },
                    {
                        "loader": "css-loader",
                        "options": {
                            "alias": {
                                "img": path.resolve(STATIC, 'img')
                            }
                        }
                    },
                    {
                        "loader": "less-loader"
                    }
                ]
            },
            {
                "test": /\.css$/,
                "use": [
                    "style-loader",
                    "css-loader"
                ]
            },
            {
                "test": /\.jsx?$/,
                "exclude": /node_modules/,
                "include": path.resolve(ROOT, 'src'),
                "use": [
                    "babel-loader"
                ]
            },
            {
                "test": /\.(png|jpg|gif|svg)/,
                "use": [{
                    "loader": "url-loader",
                    "options": {
                        "limit": 10000,
                        "name": "[name].[hash:8].[ext]"
                    }
                }]
            }
        ]
    }
}