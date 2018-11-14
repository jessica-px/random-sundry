require('webpack');
const path = require('path');

// Build outputs to ./build/bundle.js
const BUILD_DIR = path.resolve(__dirname, './public');
// Build starts at ./src/client
const APP_DIR = path.resolve(__dirname, './src/client');

const config = {
  devtool: 'cheap-module-source-map',
  entry: {
    main: APP_DIR + '/index.js'
  },
  output: {
    filename: 'bundle.js',
    path: BUILD_DIR,
    publicPath: BUILD_DIR
  },
  module: {
    rules: [
      { 
        test: /\.(png|woff|woff2|eot|ttf|svg)$/, 
        loader: 'url-loader?limit=100000' },
      {
        test: /(\.css|.scss)$/,
        use: [{
          loader: "style-loader" // creates style nodes from JS strings
        }, {
          loader: "css-loader" // translates CSS into CommonJS
        }, {
          loader: "sass-loader" // compiles Sass to CSS
        }]
      },
      {
        test: /\.(jsx|js)?$/,
        exclude: /node_modules/,
        use: [{
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            presets: ['react', 'es2015', 'stage-2'] // Transpiles JSX and ES6
          }
        }]
      } 
    ],
  },
  devServer: {
    publicPath: "/",
    historyApiFallback: true,
    contentBase: "./public",
    proxy: [ // allows redirect of requests to webpack-dev-server to another destination
      {
        context: ['/api', '/auth'],  // can have multiple
        target: 'http://localhost:8080', // server and port to redirect to
        secure: false,
      },
    ],
    port: 3030, // port webpack-dev-server listens to, defaults to 8080
  },
};

module.exports = config;