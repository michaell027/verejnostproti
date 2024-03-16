import { EnvironmentPlugin } from 'webpack';
const Dotenv = require('dotenv-webpack');

module.exports = {
  plugins: [new EnvironmentPlugin(), new Dotenv()],
  resolve: {
    fallback: {
      process: false,
    },
  },
};
