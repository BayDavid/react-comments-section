// rollup.config.cjs
const path = require('node:path');
const typescript = require('@rollup/plugin-typescript');
const resolve = require('@rollup/plugin-node-resolve');
const commonjs = require('@rollup/plugin-commonjs');
const json = require('@rollup/plugin-json');
const postcss = require('rollup-plugin-postcss');
const pkg = require('./package.json');

module.exports = {
  input: 'src/index.tsx',
  output: [
    {
      file: pkg.main,
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: pkg.module,
      format: 'esm',
      sourcemap: true,
    },
  ],
  external: [
    ...Object.keys(pkg.peerDependencies || {}),
    ...Object.keys(pkg.dependencies || {}).filter(
      (dep) => dep !== 'react' && dep !== 'react-dom'
    ),
  ],
  plugins: [
    resolve({
      extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
    }),
    commonjs(),
    json(),
    typescript({
      tsconfig: path.resolve(process.cwd(), 'tsconfig.json'),
    }),
    postcss({
      extract: path.resolve('dist/styles.css'),
      modules: false,
      use: ['sass'],
    }),
  ],
};
