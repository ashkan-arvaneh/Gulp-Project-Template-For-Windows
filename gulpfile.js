/* globals require, exports */

'use strict';

// gulp plugins
var gulp     = require('gulp'),
gutil        = require('gulp-util'),
es           = require('event-stream'),
sass         = require('gulp-sass'),
autoprefixer = require('gulp-autoprefixer'),
jshint       = require('gulp-jshint'),
clean        = require('gulp-clean'),
connect      = require('gulp-connect'),
browserify   = require('gulp-browserify'),
usemin       = require('gulp-usemin'),
rename       = require('gulp-rename'),
image        = require('gulp-image');
// Connect Task
gulp.task('connect', connect.server({
  root: ['./app'],
  port: 7777,
  livereload: true
}));

// Html reload
gulp.task('html', function () {
  return gulp.src('./app/**/*.html')
    .pipe(connect.reload());
});

// sass compiler task
gulp.task('sass', function () {
  return gulp.src('./app/styles/main.scss')
    .pipe(sass({
      onError: function (error) {
        gutil.log(gutil.colors.red(error));
        gutil.beep();
      },
      onSuccess: function () {
        gutil.log(gutil.colors.green('Sass styles compiled successfully.'));
      }
    }))
    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
    .pipe(gulp.dest('./app/styles/compiled'))
    .pipe(connect.reload());
});

// Minify images
gulp.task('image', function () {
  gulp.src('app/images/*')
    .pipe(image())
    .pipe(gulp.dest('./dist/images'));
});

// Script task
gulp.task('js', function () {
  return gulp.src('app/js/bundle.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(browserify({
      insertGlobals: true
    }))
    .pipe(rename(function (path) {
      path.basename = 'bundle';
    }))
    .pipe(gulp.dest('./dist/js'))
    .pipe(connect.reload());
});

gulp.task('watch', function () {
  gulp.watch([ 'app/styles/**/*.scss'], ['sass']);
  gulp.watch([ 'app/js' + '/**/*.js'], ['js']);
  gulp.watch(['./app/**/*.html'], ['html']);
});

gulp.task('serve', ['connect', 'sass', 'js', 'watch']);

gulp.task('clean', function () {
  gutil.log('Clean task goes here...');
});

gulp.task('usemin', function () {
  gulp.src('./app/**/*.html')
    .pipe(usemin())
    .pipe(gulp.dest('./dist/'));
});

gulp.task('clean-build', function () {
  return gulp.src('dist/', {read: false})
    .pipe(clean());
});

gulp.task('build', ['clean-build', 'sass', 'js', 'image', 'usemin'], function () {
});

gulp.task('default', function () {
  gutil.log('Default task goes here...');
});