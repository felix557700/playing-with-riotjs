var gulp = require('gulp');
var webserver = require('gulp-webserver');
var shell = require('gulp-shell');

gulp.task('html', function () {
	return gulp.src('./src/**/*.html')
		.pipe(gulp.dest('./dest'));
});

gulp.task('rollup', shell.task(['rollup -c']));

gulp.task('server', function () {
	gulp.src(['./dest', './node_modules'])
		.pipe(webserver({
			livereload: true,
			fallback: 'index.html',
			open: true
		}));
});

gulp.task('watch', function () {
	gulp.watch(['./src/**/*.html', './src/**/*.tag', './src/**/*.js'], ['html', 'rollup']);
});

gulp.task('default', ['html', 'rollup', 'server', 'watch']);

