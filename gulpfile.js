const gulp = require('gulp');
const babel = require('gulp-babel');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('transpile-js', () =>
	gulp.src('./src/js/app.js')
		.pipe(babel())
		.pipe(gulp.dest('dist/js'))
);

gulp.task('sass', () =>
	gulp.src('./src/styles/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(autoprefixer())
		.pipe(gulp.dest('./dist/css'))
);

gulp.task('default', ['sass', 'transpile-js'], () => {
	gulp.watch('./src/styles/**/*.scss', ['sass']);
	gulp.watch('./src/js/app.js', ['transpile-js']);
});
