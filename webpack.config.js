var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // First tell our webpack an entry point in our app
    entry: './src/index.js',

    // which transformations to actually make
    module: {
        rules: [
            { 
                test: /\.(js)$/, 
                exclude:/node-modules/, 
                use: {
                    loader:'babel-loader'
                } 
            },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.html$/i, loader: 'html-loader' },
            { test: /\.(png|jpg|gif)$/, loader: 'file-loader'}
        ]
    },

    // specifying where webpack should output the new transformed code
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'index_bundle.js'
    },

    // create a new instance of HTMLWebpackPlugin and specify one thing,
    // the template of what we want the newly created file to look like.
    plugins: [
        new HtmlWebpackPlugin({
            // inject: true, // Inject all files that are generated by webpack, e.g. bundle.js
            // entryPoint: 'src/index.html',
            template: 'src/index.html'
        })
    ],

    //   "mode" we want it to run in - "production" or "development". 
    //    development mode will enable things like tooling for debugging and faster builds.
    mode: "development"
}