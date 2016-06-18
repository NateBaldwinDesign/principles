var jsonSass = require('gulp-json-sass'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    designProperties = require('./principles.json');
 
gulp.task('sass', function() {
  return gulp
    .src(['principles.json', 'scss/**/*.scss'])
    .pipe(jsonSass({
      sass: true,
      ignoreJsonErrors: true
    }))
    .pipe(concat('style.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('dest/'));
});