import gulp from 'gulp'
import { path, plugins } from './gulp/settings/settings.js'

import { build } from './gulp/task/build.js'
import { css } from './gulp/task/css.js'
import { html } from './gulp/task/html.js'
import { img } from './gulp/task/img.js'
import { scss } from './gulp/task/scss.js'
global.app = {
	gulp: gulp,
	path: path,
	plugins: plugins,
}

const watcher = () => {
	gulp.watch('./src/**/**/*.html', html)
	gulp.watch('./src/**/**/*.{scss,sass}', styles)
	gulp.watch('./src/**/**/*.js', build)
}
const styles = gulp.series(scss)
const buildApp = gulp.series(html, styles, build, css, img)
const dev = gulp.series(html, scss, build, gulp.parallel(watcher))

gulp.task('image', img)
gulp.task('build', buildApp)
gulp.task('dev', dev)
