const path = require('path');
const dev = process.env.NODE_ENV == "development"
const liveServer = require("live-server")

if(dev){
  liveServer.start({
    // root: "./",
    file: "index.html"

  })
}


module.exports = {
    watch: dev,
  entry: './src/index.tsx', // Punto de entra
  module: {
    rules: [
        {
            test: /\.tsx?$/,
            use: 'ts-loader',
            exclude: /node_modules/,
        },
        {
          test: /\.css$/i,
          use: ["style-loader", "css-loader"]
        }
    ]
  },
  resolve: {
   extensions: [".tsx", ".js", ".ts"]
  },
  output: {
    filename: 'bundle.js', 
    path: path.resolve(__dirname, 'dist'), 
    
  },
};
