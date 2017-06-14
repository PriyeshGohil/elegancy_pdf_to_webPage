var path = require('path');
var extractTextWebpackPlugin = require('extract-text-webpack-plugin');

var extractPlugin = new extractTextWebpackPlugin({
    filename: 'main.css'
})

module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/dist'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }]
            },

            {
                test: /\.scss$/,
                use: extractPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.png$/,
                use: 'file-loader'
            },
            {
                test: /\.ttf$/,
                use: 'file-loader'
            }
        ]
    },

    plugins: [
        extractPlugin
    ]
};