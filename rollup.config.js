import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import babel from 'rollup-plugin-babel';
import uglify from 'rollup-plugin-uglify';
import eslint from 'rollup-plugin-eslint';

const isProduction = process.env.NODE_ENV === 'production';

export default {
  entry: 'src/index.js',
  dest: 'dist/index.js',
  format: 'umd',
  sourceMap: true,
  moduleName: process.env.npm_package_name,
  plugins: [
    eslint({ exclude: 'node_modules/**' }),
    resolve({ jsnext: true, main: true }),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
    }),
    (isProduction && uglify()),
  ],
};
