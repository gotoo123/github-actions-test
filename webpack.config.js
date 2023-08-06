const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, 'src/main.jsx'),
  },
  context: path.join(__dirname, '.'),
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /(node_modules)/,
        use: ['babel-loader'],
      },
      {
        test: /\.(svg|jpeg)$/i,
        use: 'file-loader',
      },
      {
        test: /\.css$/i,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:5]',
              },
            },
          },
        ],
      },

      {
        test: /\.less$/i,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: '[local]-[hash:5]',
              },
            },
          },
          {
            loader: 'less-loader',
          }
        ],
      },
      {
        test: /\.md$/i,
        use: ['html-loader', 'markdown-loader'],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'public/template.html'),
    }),
  ],
  devServer: {
    static: './dist',
    proxy: {
      '/api': {
        target: 'http://51.158.151.96:8888/',
        // target: 'http://localhost:3000/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '',
        }
      }
    }
  },
  devtool: 'inline-source-map',
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  },
  optimization: {
    runtimeChunk: 'single',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
};
