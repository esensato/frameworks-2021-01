const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const path = require("path"); 

module.exports = { entry: "./App.js", 
    output: { path: path.join(__dirname, "dist"), filename: "bundle.js" },
    module: {
        rules: [{ test: /\.js$/, exclude: /node_modules/, loader: "babel-loader" }]
    },
    plugins: [new HtmlWebpackPlugin({template:"index.html", title:"Jogo da Forca"}),
              new CopyPlugin({ patterns: [ { from: "img", to: "dist/img" } ] })
    ]

};
