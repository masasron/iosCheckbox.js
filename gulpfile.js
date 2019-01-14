
var gulp = require('gulp');
var sass = require('gulp-sass');

/*

[!] Possible security issue with one of the packages below, uncomment at your own risk.

var minifyCSS = require('gulp-csso');
var cssBeautify = require('gulp-cssbeautify');
var uglify = require('gulp-uglifyes');
*/

var rename = require("gulp-rename");

var files = "./src/**/*";

function showError (error) {
	console.log(error.toString())
	this.emit('end')
}

gulp.task('css-min', function(){
    return gulp.src('./src/*.scss')
      .pipe(sass().on('error', showError))
      .pipe(minifyCSS())
      .pipe(rename({ suffix: '.min' }))
      .pipe(gulp.dest('./dist/css'))
});

gulp.task('css', function(){
    return gulp.src('./src/*.scss')
      .pipe(sass().on('error', showError))
      .pipe(cssBeautify({
              indent: "\t",
              autosemicolon: true
          }))
      .pipe(rename({ suffix: '' }))
      .pipe(gulp.dest('./dist/css'))
});

gulp.task('js', function(){
  return gulp.src('./src/*.js')
	.pipe(rename({ suffix: '' }))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('js-min', function(){
  return gulp.src('./src/*.js')
    .pipe(rename({ suffix: '.min' }))
	.pipe(uglify({ 
        mangle: false, 
        ecma: 6 
     }))
    .pipe(gulp.dest('./dist/js'))
});

gulp.task('default', ['css','css-min','js','js-min'])

gulp.watch(files, ['css','css-min','js','js-min'])
