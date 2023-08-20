
import { resolve, dirname, join } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
    mode: 'development',
    experiments: {
        css: true
    },
    entry: './index.js',
    output: {
        filename: 'main.js',
        path: resolve(__dirname, 'dist'),
    },
    module: {
        rules: [{
          type: 'css',
          test: /\.s?css/,
          oneOf: [
            {
              use: [
                { loader: 'postcss-loader' },
              ],
            },
          ],
        }]
    },
    devServer: {
      static: {
        directory: join(__dirname, 'dist'),
      }
    },
};