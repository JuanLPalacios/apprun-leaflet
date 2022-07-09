import { terser } from 'rollup-plugin-terser';
import sourcemaps from 'rollup-plugin-sourcemaps';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';

const plugins = [
  resolve(),
  commonjs(),
  terser({
    warnings: true,
    module: true,
    mangle: {
      properties: {
        regex: /^__/,
      },
    },
  }),
  sourcemaps()
];

export default [{
  input: 'esm/apprun-leaflet.js',
  output: {
    file: 'dist/apprun-leaflet.esm.js',
    format: 'esm',
    sourcemap: true
  },
  plugins,
}]