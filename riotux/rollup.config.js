import json from 'rollup-plugin-json';
import babel from 'rollup-plugin-babel';
import riot from 'rollup-plugin-riot';
import nodeResolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';

export default {
	entry: 'src/app.js',
	dest: 'dest/app.js',
	format: 'iife',
	globals: {
		riot: 'riot'
	},
	external: [
		'riot'
	],
	plugins: [
		json(),
		riot(),
		nodeResolve({
			jsnext: true,
			main: true,
			browser: true
		}),
		commonjs(),
		babel({
			"presets": [
				["es2015", {"modules": false}]
			],
			"plugins": ["external-helpers"]
		})
	]
}