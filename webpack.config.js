const path = require('path');
var nodeExternals = require('webpack-node-externals');


const CopyPlugin = require('copy-webpack-plugin');
const NodemonPlugin = require( 'nodemon-webpack-plugin' );

const targerFolder = 'dist';
module.exports = {
    mode : 'development',
    target: 'node',
    externals: [nodeExternals()],
    entry: ['./src/main.ts'],
    resolve: {
        extensions: ['.ts' ],
        alias : {
            "@adapter" : path.resolve(__dirname, 'src/adapter/'),
            "@core" : path.resolve(__dirname, 'src/core/'),
            "@infrastructure" : path.resolve(__dirname, 'src/infrastructure/')
           }
    },
    
    module: {
        rules: [
          {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
          },
        ],
    },
    
    plugins: [
        new CopyPlugin([
          { from: path.resolve(__dirname,'config') , to: path.resolve(__dirname,targerFolder,'config') },
          { from: path.resolve(__dirname,'cert') , to: path.resolve(__dirname,targerFolder,'cert') },
          { from: path.resolve(__dirname,'package.json'), to: path.resolve(__dirname,targerFolder) },
          { from: path.resolve(__dirname,'pm2.run.json'), to: path.resolve(__dirname,targerFolder) },
          { from: path.resolve(__dirname,'log4js.json'), to: path.resolve(__dirname,targerFolder) },
        ]),
        new NodemonPlugin()
    ],
    output: {
        path: path.join(__dirname, 'dist','src'),   
        filename: 'main.js',
    },
}