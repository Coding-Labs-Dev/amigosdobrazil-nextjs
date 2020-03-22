const path = require('path');
const dotenv = require('dotenv');

const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

if (process.env.NODE_ENV === 'development') {
  dotenv.config({ path: path.join(__dirname, '.env.development') });
} else {
  dotenv.config();
}

module.exports = withCSS(
  withSass({
    webpack: (config, options) => {
      if (config.resolve.plugins) {
        config.resolve.plugins.push(new TsconfigPathsPlugin());
      } else {
        config.resolve.plugins = [new TsconfigPathsPlugin()];
      }

      return config;
    },
    target: 'serverless',
    env: {
      API: process.env.API,
    },
  })
);
