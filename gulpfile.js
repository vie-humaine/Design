'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('default', function () {
gulp.src('./scss/app.scss')
  .pipe(sass({outputStyle: 'compressed'}))
  .pipe(gulp.dest('./css'));
});
