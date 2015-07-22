var gulp = require('gulp');
var sass = require('gulp-sass');
var neat = require('node-neat').includePaths;

var paths = {
	scss: './assets/sass/*.scss'
}
gulp.task('sass', function () {
	return gulp.src(paths.scss)
		.pipe(sass({
			includePaths: ['sass'].concat(neat)
		}).on('error', sass.logError))
		.pipe(gulp.dest('./public/css'));
});

gulp.task('sass:watch', function () {
	gulp.watch(paths.scss, ['sass']);
});

gulp.task('default', function() {
	gulp.start('sass');
});