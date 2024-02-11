// path
export const path = {
	build: {
		html: './build/',
		css: './build/css/',
		img: './build/img/',
		js: './build/js/',
	},
	src: {
		html: './src/*.html',
		img: './src/assets/img/**/*.{jpg,jpeg,png,gif}',
		scss: './src/style.scss',
		js: './src/app.js',
	},
	clean: './build',
}

// plugins

import browsersync from 'browser-sync'
import notify from 'gulp-notify'
import plumber from 'gulp-plumber'
import rename from 'gulp-rename'

export const plugins = {
	notify,
	plumber,
	rename,
	browsersync,
}
