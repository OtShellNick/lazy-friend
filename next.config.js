/** @type {import('next').NextConfig} */

const ESLintPlugin = require('eslint-webpack-plugin');

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: config => {
    config.plugins.push(
      new ESLintPlugin({
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        failOnError: true,
        emitWarning: true, // показывать все ошибки линтера при пересборке
      }),
    );
    return config;
  },
};

module.exports = nextConfig;
