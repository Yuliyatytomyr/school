var gulp = require('gulp'),
	sass = require('gulp-sass'),
	cleanCSS = require('gulp-clean-css'),
	autoprefixer = require('gulp-autoprefixer'),
  rename = require('gulp-rename'),
	webserver = require('gulp-webserver');

gulp.task('sass', function () {
  return gulp.src('./src/scss/**/*.scss')

    // compile sass
    .pipe(sass.sync().on('error', sass.logError))

    // autoprefixer
    .pipe(autoprefixer({
        browsers: ['last 60 versions'],
        cascade: false
    }))

    //minify css
    .pipe(cleanCSS({compatibility: 'ie8',level: '2'}))

    // change name
    .pipe(rename({ basename: 'style' }))

    // replace in folder
    .pipe(gulp.dest('./public/css/'));
});


gulp.task('watch', function () {
  gulp.watch('./src/scss/**/*.scss', ['sass']);
});

// run browser
gulp.task('webserver', function () {
  gulp.src('public')
  .pipe(webserver({
    livereload: true,
    directoryListening: true,
    open: true,
    port: 3000,
  }));
});

gulp.task('default', ['webserver','watch']);