var webpack = require('webpack')

var path = require('path')
var objectAssign = require('object-assign')

var NODE_ENV = process.env.NODE_ENV

var env = {
    production: NODE_ENV && NODE_ENV.trim() === 'production',
    staging: NODE_ENV && NODE_ENV.trim() === 'staging',
    test: NODE_ENV && NODE_ENV.trim() === 'test',
    development: NODE_ENV && NODE_ENV.trim() === 'development' || typeof NODE_ENV === 'undefined'
}

objectAssign(env, {
    build: (env.production || env.staging)
})

module.exports = {
    target: 'web',
    entry: ['./src/index.ts'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: env.production ? 'griddle-react-bootstrap.min.js' : 'griddle-react-bootstrap.js'
    },
    module: {
        loaders: [
            {
                test: /\.ts(x?)$/,
                exclude: [/node_modules/],
                loader: 'ts-loader'
            }
        ]
    },
    resolve: {
        modulesDirectories: ['node_modules'],
        extensions: ['', '.tsx', '.ts', '.js']
    },
    plugins: [
        new webpack.DefinePlugin({
            __DEV__: env.development,
            __STAGING__: env.staging,
            __PRODUCTION__: env.production,
            __CURRENT_ENV__: "'" + (NODE_ENV) + "'"
        })
    ],
    devtool: '#inline-source-map',
    cache: true
}