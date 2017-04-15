'use strict';

const gulp = require('gulp'),
      sass = require('gulp-sass'),
      cleancss = require('gulp-cleancss'),
      concat = require('gulp-concat'),
      pug  = require('gulp-pug');

const files = {
  css: ['src/assets/sass/main.sass'],
  cssVendor: [
    'node_modules/normalize.css/normalize.css'
  ],
  js: [''],
  jsVendor: ['']
}

gulp.task('views', function() {
  return gulp.src('src/*.pug')
    .pipe(pug())
    .pipe(gulp.dest('dist'));
});

gulp.task('css', function() {
  return gulp.src(files.css)
    .pipe(sass({
      outputStyle: 'compressed'
    }))
    .pipe(cleancss({
      compatibility: '*'
    }))
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('cssVendor', function() {
  return gulp.src(files.cssVendor)
    .pipe(concat('vendor.css'))
    .pipe(cleancss({
      compatibility: '*'
    }))
    .pipe(gulp.dest('dist/assets/css'));
});

gulp.task('default', ['views', 'css', 'cssVendor']);