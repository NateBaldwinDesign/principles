var jsonSass = require('gulp-json-sass'),
    gulp = require('gulp'),
    concat = require('gulp-concat'),
    sass = require('gulp-ruby-sass'),
    designProperties = require('design.json');
 
gulp.task('sass', function() {
  return gulp
    .src( designProperties, 'example.sass')
    .pipe(jsonSass({
      sass: true
    }))
    .pipe(concat('output.sass'))
    .pipe(sass())
    .pipe(gulp.dest('out/'));
});