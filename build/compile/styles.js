var gulp       = require('gulp');
var sass       = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var connect    = require('gulp-connect');

module.exports = function() {
  return gulp.src('app/styles/app.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({
      includePaths: [
        'node_modules/bourbon/core',
        'node_modules/bourbon-neat/app/assets/stylesheets',
        'node_modules/font-awesome/scss'
      ]
    }))
    .pipe(sourcemaps.write())
    .pipe(connect.reload())
    .pipe(gulp.dest('dist/styles'));
};

module.exports.dependencies = ['lint:styles'];
