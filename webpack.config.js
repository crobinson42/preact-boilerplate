var path = require("path");
module.exports = {
      entry: './src/index.js',
      output: {
         path: path.resolve(__dirname, "build"),
         publicPath: "/assets/",
         filename: 'bundle.js'
      },
      module: {
        loaders: [
         {
           test: /\.js$/,
           exclude: /(node_modules)/,
           loader: 'babel', // 'babel-loader' is also a legal name to reference
         }
       ]
     }
 };
