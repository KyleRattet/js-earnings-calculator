var gulp = require('gulp');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');

// configure connect task
gulp.task('connect', function() {
  connect.server({
    root: '.', // update path!!
    livereload: true
  });
});

// configure jshint task
gulp.task('jshint', function() {
  return gulp.src('src/javascripts/**/*.js') // update path!
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

gulp.task('watch', function() {
  gulp.watch('source/javascript/**/*.js', ['jshint']); // update path!
});

// default task!
gulp.task('default', ['watch', 'connect']);
