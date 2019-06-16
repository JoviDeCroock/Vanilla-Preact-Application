import urlResolve from './node_modules/rollup-plugin-url-resolve/esm/rollup-plugin-url-resolve';
import { terser } from 'rollup-plugin-terser';
import commonjs from 'rollup-plugin-commonjs';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'src/index.js',
  treeshake: true,
	output: {
		file: 'dist/bundle.js',
		format: 'esm', 
		sourcemap: true
	},
  plugins: [
    urlResolve(),
    resolve(),
    commonjs({
      // Treat unpkg URLs as CommonJS
      include: /^https:\/\/unpkg\.com/,
      // ...except for unpkg ?module URLs
      exclude: /^https:\/\/unpkg\.com.*?\?.*?\bmodule\b/
    }),
    terser(),
  ]
}
