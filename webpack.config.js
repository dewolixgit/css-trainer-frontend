const path = require('path');

const { getLocalIdent } = require('@dr.pogodin/babel-plugin-react-css-modules/utils');
const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
const autoprefixer = require('autoprefixer');
const PreloadWebpackPlugin = require('@vue/preload-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');

const SRC_PATH = path.resolve(__dirname, 'src');
const PUBLIC_PATH = path.resolve(__dirname, 'public');

const IS_PROD = process.env.NODE_ENV === 'production';

/* RULES ANS LOADERS SECTION START */

const RULES_REGEXP = {
  nodeModules: /node_modules/,
  scripts: /\.([tj])sx?$/,
  styles: /\.(s?css|sass)$/,
  stylesModules: /\.module\.(s?css|sass)$/,
  images: /\.(png|jpg|gif|svg)$/,
  svgComponents: /\.(component|c)\.svg$/,
  fonts: /\.(woff2|woff?)$/,
};

const getCSSLoader = (withModules = false) => [
  IS_PROD
    ? {
        loader: MiniCssExtractPlugin.loader,
        options: {
          publicPath: '../../',
        },
      }
    : {
        loader: 'style-loader',
      },
  {
    loader: 'css-loader',
    options: {
      modules: withModules && {
        getLocalIdent,
        localIdentName: IS_PROD ? '[hash:base64]' : '[name]__[local]__[hash:base64:5]',
      },
      importLoaders: 2,
      sourceMap: false,
    },
  },
  {
    loader: 'postcss-loader',
    options: {
      postcssOptions: {
        config: path.resolve(__dirname, 'postcss.config.js'),
        plugins: () => [autoprefixer()],
      },
    },
  },
  {
    loader: 'sass-loader',
    options: {
      sassOptions: {
        includePaths: [SRC_PATH, path.join(SRC_PATH, 'styles')],
      },
    },
  },
];

const getRules = () => [
  {
    test: RULES_REGEXP.scripts,
    exclude: RULES_REGEXP.nodeModules,
    use: [
      {
        loader: require.resolve('babel-loader'),
        options: {
          plugins: [!IS_PROD && require.resolve('react-refresh/babel')].filter(Boolean),
        },
      },
    ],
  },
  {
    test: RULES_REGEXP.styles,
    exclude: RULES_REGEXP.stylesModules,
    use: getCSSLoader(false),
  },
  {
    test: RULES_REGEXP.stylesModules,
    use: getCSSLoader(true),
  },
  {
    test: RULES_REGEXP.images,
    exclude: RULES_REGEXP.svgComponents,
    type: 'asset/resource',
    generator: {
      filename: 'static/img/[name].[contenthash][ext]',
    },
  },
  {
    test: RULES_REGEXP.svgComponents,
    use: [
      {
        loader: '@svgr/webpack',
        options: {
          memo: true,
          svgoConfig: {
            plugins: [
              {
                name: 'preset-default',
                params: {
                  overrides: {
                    removeViewBox: false,
                    cleanupIDs: false,
                  },
                },
              },
              'prefixIds',
            ],
          },
        },
      },
    ],
  },
  {
    test: RULES_REGEXP.fonts,
    type: 'asset/resource',
    generator: {
      filename: 'static/fonts/[name].[contenthash][ext]',
    },
  },
];

/* RULES ANS LOADERS  SECTION END */

/* PLUGINS SECTION START */

const getProdPlugins = () =>
  IS_PROD
    ? [
        new MiniCssExtractPlugin({
          filename: 'static/css/[name].[contenthash].css',
        }),
        new CleanWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin(),
        new PreloadWebpackPlugin({
          rel: 'preload',
          include: 'allAssets',
          fileWhitelist: [RULES_REGEXP.fonts],
          as(entry) {
            return RULES_REGEXP.fonts.test(entry) ? 'font' : 'script';
          },
        }),
      ]
    : [];

const getDevPlugins = () =>
  IS_PROD
    ? []
    : [
        new ReactRefreshWebpackPlugin(),
        new ForkTsCheckerWebpackPlugin({
          typescript: {
            configFile: path.resolve(__dirname, 'tsconfig.json'),
          },
        }),
      ];

const getPlugins = () => [
  new HtmlWebpackPlugin({
    filename: 'index.html',
    template: path.join(SRC_PATH, 'index.html'),
  }),
  new CopyPlugin({
    patterns: [
      {
        from: path.join(SRC_PATH, 'static'),
        to: path.join(PUBLIC_PATH, 'static'),
        noErrorOnMissing: true,
      },
    ],
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      API_URL: JSON.stringify(process.env.API_URL),
    },
  }),
  new webpack.ProgressPlugin(),
  ...getDevPlugins(),
  ...getProdPlugins(),
];

/* PLUGINS SECTION END */

/* DEV SERVER SECTION START */

const getDevServer = () => ({
  host: '0.0.0.0',
  port: 3020,
  historyApiFallback: true,
  hot: true,
  https: true,
  proxy: {
    '/api': {
      changeOrigin: true,
      target: 'https://localhost:3050',
      secure: true,
    },
  },
});

/* DEV SERVER SECTION END */

/* ALIASES SECTION START */

const ALIASES = [
  'components',
  'config',
  'entities',
  'img',
  'models',
  'pages',
  'stores',
  'styles',
  'types',
  'utils',
];

const ALIASES_EXTENSIONS = ['.ts', '.tsx', '.js', '.jsx', '.scss', '.css'];

const getAliases = () => ({
  extensions: ALIASES_EXTENSIONS,
  alias: ALIASES.reduce((prev, alias) => ({ ...prev, [alias]: path.join(SRC_PATH, alias) }), {}),
});

/* ALIASES SECTION END */

/* OPTIMIZATION SECTION START */

const getOptimizations = () => ({
  minimize: IS_PROD,
  minimizer: IS_PROD
    ? [
        new TerserPlugin({
          terserOptions: {
            sourceMap: true,
          },
        }),
        new CssMinimizerPlugin(),
      ]
    : [],
});

/* OPTIMIZATION SECTION END */

module.exports = {
  entry: path.resolve(SRC_PATH, 'index.tsx'),
  mode: IS_PROD ? 'production' : 'development',
  devtool: IS_PROD ? 'hidden-source-map' : 'eval-source-map',
  output: {
    path: PUBLIC_PATH,
    publicPath: '/',
    filename: 'static/js/bundle.[contenthash].js',
  },
  resolve: getAliases(),
  optimization: getOptimizations(),
  module: {
    rules: getRules(),
  },
  plugins: getPlugins().filter(Boolean),
  devServer: getDevServer(),
};
