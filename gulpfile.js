var jsonSass = require('gulp-json-sass'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    clean = require('gulp-rimraf'),
    sourcemaps = require('gulp-sourcemaps'),
    rename = require('gulp-rename'),
    replace = require('gulp-replace'),
    designProperties = require('./config.json');


gulp.task('clean-css', function() {
    gulp.src('build/**.css').pipe(clean());
})
// Convert JSON to SCSS variables
gulp.task('json-sass', function() {
  return gulp
    .src('config.json')
    .pipe(jsonSass({
      sass: true,
      ignoreJsonErrors: false
    }))
    .pipe(concat('_principles.scss'))
    .pipe(gulp.dest('scss/'))
    .pipe(gulp.dest('dest/'));
});
// Convert JSON to Less variables
gulp.task('json-less', function() {
  return gulp
    .src('config.json')
    .pipe(jsonSass({
      sass: true,
      ignoreJsonErrors: false
    }))
    .pipe(concat('_principles.scss'))    
    .pipe(replace('$', '@'))
    .pipe(rename('_principles.less'))
    .pipe(gulp.dest('dest/'));
});
// Convert JSON to Android XML

// Convert JSON to iOS JSON format


// Compile Sass
gulp.task('sass', ['json-sass'], function() {
  return gulp
    .src('scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('build/'));
});