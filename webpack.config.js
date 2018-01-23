const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const layoutTemplate = require('./app/layout');
const startMockServer = require('./mock-backend/mock-server');
const appConfig = require('./app-config.json');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const polyfills = require.resolve('./polyfills');

const isDevServer = process.argv[1].indexOf('webpack-dev-server') !== -1;
const MOCK_SERVER_PORT = 3000;
const DEV_SERVER_PORT = 8070;

if (isDevServer) {
  startMockServer(MOCK_SERVER_PORT);
}

const autoPrefixerBrowsers = [
  'Chrome >= 40',
  'Edge >= 1',
  'ie >= 11',
  'ff >= 36',
  'Safari >= 8',
  'last 2 versions',
];

const stylesLoaders = {
  fallback: { loader: 'style-loader', options: { sourceMap: true } },
  use: [
    { loader: 'css-loader', options: { sourceMap: true } },
    { loader: 'resolve-url-loader', options: { sourceMap: true } },
    {
      loader: 'postcss-loader',
      options: {
        sourceMap: true,
        plugins: () => [
          require('autoprefixer')({ browsers: autoPrefixerBrowsers }),
        ],
      },
    },
    { loader: 'sass-loader', options: { sourceMap: true } },
  ],
};

let tsLintOptions = {};

const tslintCiOptions = {
  formatter: 'checkstyle',
  fileOutput: {
    dir: './build/reports/checkstyle/tslint/',
    ext: 'xml',
    clean: true,
    header:
      "<?xml version='1.0' encoding='utf-8'?>\n<checkstyle version='5.7'>",
    footer: '</checkstyle>',
  },
};

module.exports = function(env) {
  if (env && env.ci) {
    tsLintOptions = tslintCiOptions;
  }

  if (!env || !env.config) {
    env = { config: 'prod' };
  }

  return {
    entry: {
      main: [polyfills, './app/index.tsx'],
    },
    output: {
      path: path.join(__dirname, 'public'),
      publicPath: '',
      filename: 'app.[hash].js',
    },
    resolve: {
      extensions: ['.tsx', '.ts', '.js', '.json'],
    },
    module: {
      loaders: [
        {
          test: /\.(tsx|ts)?$/,
          enforce: 'pre',
          loader: 'tslint-loader',
          options: tsLintOptions,
        },
        { test: /\.tsx?$/, loader: 'ts-loader' },
        { test: /\.scss?$/, use: ExtractTextPlugin.extract(stylesLoaders) },
        { test: /\.html?$/, loader: 'html-loader' },
        {
          test: /\.(gif|jpg|png|woff|woff2|eot|ttf|svg)$/,
          use: [
            {
              loader: 'url-loader',
              options: { query: { limit: 10000 } },
            },
          ],
        },
      ],
    },
    devtool: 'source-map',
    devServer: {
      port: DEV_SERVER_PORT,
      contentBase: path.join(__dirname, 'public'),
      noInfo: true,
      hot: false,
      inline: isDevServer,
      historyApiFallback: true,
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'Ngel Sataq',
        templateContent: layoutTemplate,
        minify: {
          removeComments: true,
          removeCommentsFromCDATA: true,
          removeCDATASectionsFromCDATA: true,
          collapseWhitespace: true,
          conservativeCollapse: true,
          collapseInlineTagWhitespace: true,
          collapseBooleanAttributes: true,
          removeTagWhitespace: true,
          preventAttributesEscaping: true,
          useShortDoctype: true,
          removeEmptyAttributes: true,
          removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true,
          keepClosingSlash: true,
          caseSensitive: true,
        },
      }),
      new webpack.DefinePlugin({
        CONFIG: JSON.stringify(appConfig[env.config]),
      }),
      new ExtractTextPlugin('styles.css'),
      new StyleLintPlugin({
        configFile: 'stylelint.config.js',
        emitErrors: isDevServer,
      }),
    ],
  };
};
