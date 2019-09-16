const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = env => {
  return {
    mode: 'production',
    entry: {
      'veweOnWithDelay.min.js': path.resolve(__dirname, 'src/veweOnWithDelay.js'),
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: '[name]',
      chunkFilename: '[id]',
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
        },
      ]
    },
    optimization: {
      nodeEnv: 'production',
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            extractComments: 'all',
            warnings: false,
          },
        }),
      ],
    },
    stats: {
      colors: true,
      hash: true,
      timings: true,
      assets: true,
      chunks: true,
      chunkModules: true,
      modules: true,
      children: true,
    },
  }
};
