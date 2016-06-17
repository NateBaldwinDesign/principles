var jsonSass = require('gulp-json-sass'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    sourcemaps = require('gulp-sourcemaps'),
    designProperties = require('./design.json');
 
gulp.task('sass', function() {
  return gulp
    .src(['design.json', 'example.scss'])
    .pipe(jsonSass({
      sass: true,
      ignoreJsonErrors: true
    }))
    .pipe(concat('output.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('example/'));
});