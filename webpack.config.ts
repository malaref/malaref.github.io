
import { resolve } from 'path'

module.exports = {
  entry: './src/index.tsx',
  output: {
    path: resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      'react-native$': 'react-native-web',
    },
  },
};
