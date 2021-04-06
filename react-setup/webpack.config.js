const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path"); 

module.exports = { entry: "./index.js", 
    output: { path: path.join(__dirname, "dist"), 
              filename: "bundle.js" 
    },
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
    },
    plugins: [new HtmlWebpackPlugin({template:"index.html", title:"Setup React"}),
              new CopyPlugin({ patterns: [ { from: "img", to: "img" } ] })]

};
