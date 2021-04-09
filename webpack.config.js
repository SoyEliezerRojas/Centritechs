const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const { main } = require('cli')

module.exports = {
    entry: './src/index.js',
    output:{
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    module:{
        rules:[{
            test: /\.css$/,
            use: ['style-loader' , 'css-loader']
        }]
    },

    plugins:[
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ]
}