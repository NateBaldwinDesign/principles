var jsonSass = require('gulp-json-sass'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    clean = require('gulp-rimraf'),
    sourcemaps = require('gulp-sourcemaps'),
    designProperties = require('./config.json');


gulp.task('clean-css', function() {
    gulp.src('dest/**.css').pipe(clean());
})
// Convert JSON to SCSS variables
gulp.task('json-sass', ['clean-css'], function() {
  return gulp
    .src('config.json')
    .pipe(jsonSass({
      sass: true,
      ignoreJsonErrors: false
    }))
    .pipe(concat('_principles.scss'))
    .pipe(gulp.dest('scss/'));
});
// Compile Sass
gulp.task('sass', ['json-sass'], function() {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('dest/'));
});