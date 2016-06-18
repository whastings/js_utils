#!/usr/bin/env node

const path = require('path');
const rollup = require('rollup').rollup;
const typescript = require('rollup-plugin-typescript');

const SRC_DIR = path.resolve(__dirname, '..', 'lib');
const DEST_DIR = path.resolve(__dirname, '..', 'dist');
const FORMATS = [
  'cjs',
  'es'
];
const TS_TARGETS = {
  cjs: 'es5',
  es: 'es6'
};

function getConfig(format) {
  return {
    entry: path.join(SRC_DIR, 'index.ts'),
    plugins: [
      typescript({
        module: 'es6',
        target: TS_TARGETS[format],
        tsconfig: false
      })
    ]
  };
}

Promise.all(FORMATS.map((format) => {
  return rollup(getConfig(format))
    .then((bundle) => bundle.write({format, dest: path.join(DEST_DIR, format, 'index.js')}));
}))
  .then(() => console.log('Build complete!'))
  .catch((error) => console.log('Build error: ', error));
