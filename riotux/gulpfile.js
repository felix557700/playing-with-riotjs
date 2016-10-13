var gulp = require('gulp');
var webserver = require('gulp-webserver');
var shell = require('gulp-shell');
var htmlmin = require('gulp-htmlmin');

gulp.task('html', function () {
	return gulp.src('./src/**/*.html')
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true
		}))
		.pipe(gulp.dest('./dest'));
});

gulp.task('riotux', function () {
	return gulp.src('./src/riotux/*.js')
		.pipe(gulp.dest('./dest/riotux'));
});

gulp.task('css', function () {
	return gulp.src('./src/**/*.css')
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
	gulp.watch(['./src/**/*.html', './src/**/*.css', './src/**/*.tag', './src/**/*.js'], ['html', 'css', 'rollup']);
});

gulp.task('default', ['html', 'css', 'rollup', 'server', 'watch']);

