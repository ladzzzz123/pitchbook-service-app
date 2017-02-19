const webpack = require('webpack');
const path = require('path');
const autoprefixer = require('autoprefixer');
const mixins = require('postcss-mixins');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProd = nodeEnv === 'production';


module.exports = {
  entry: {
    js: './client/main.js',
    vendor: [
      'react',
      'react-bootstrap',
      'react-dom',
      'react-tap-event-plugin',
      'react-router',
      'redux',
      'react-router-redux',
      'redux-thunk',
      'react-redux',
      'axios',
    ]
  },
  output: {
    path: './public/build/',
    publicPath: '/frontend/build/',
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js'
  },

  resolve: {
    extensions: ['.js', '.jsx'],
  },

  performance: {
    hints: isProd ? 'warning' : false
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: ['eslint-loader'],
        include: path.join(__dirname, 'src')
      },
      {
        test: /\.css$/,
        use: isProd
              ? ExtractTextPlugin.extract({ fallback: 'style-loader', loader: 'css-loader' })
              : ['style-loader', 'css-loader']
      },
      {
        test: /\.less$/,
        use: isProd
              ? ExtractTextPlugin.extract({ fallback: 'style-loader',
                loader: ['css-loader', 'less-loader'] })
              : ['style-loader', 'css-loader', 'less-loader']
      },
      {
        test: /\.json/,
        use: 'json-loader'
      },
      {
        test: /\.(jpg|jpeg|gif|png)$/,
        use: [
          'file-loader?name=[name].[ext]',
          {
            loader: 'img-loader',
            query: {
              gifsicle: { interlaced: false },
              jpegtran: {
                progressive: true,
                arithmetic: false
              },
              optipng: { optimizationLevel: 5 },
              pngquant: {
                floyd: 0.5,
                speed: 2
              },
              svgo: {
                plugins: [
                  { removeTitle: true },
                  { convertPathData: false }
                ]
              }
            }
          }
        ],
        exclude: [/node_modules/]
      },
      {
        test: /\.(ttf|otf|eot|svg|woff(2)?)(\?[a-z0-9=&.]+)?$/,
        use: 'file-loader?name=[name].[ext]',
        exclude: [/node_modules/]
      },
      {
        test: /\.(js|jsx)$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: [
                ['es2015', { modules: false }],
                'react',
                'stage-2'
              ]
            }
          }
        ],
        exclude: /node_modules/
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      minChunks: Infinity,
      filename: 'vendor.bundle.js'
    }),
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ]
};

if (isProd) {
  const productionPlugins = [
    new webpack.LoaderOptionsPlugin({
      minimize: true,
      debug: false,
      postcss: [
        mixins(),
        autoprefixer({
          browsers: 'last 10 versions'
        })
      ],
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false
      },
    }),
    new ExtractTextPlugin({
      filename: 'bundle.css',
      allChunks: true
    })
  ];

  module.exports.plugins.push(...productionPlugins);
} else {
  const devPlugins = [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin()
  ];

  module.exports.plugins.push(...devPlugins);
}
