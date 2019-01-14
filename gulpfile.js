const { watch, series, src, dest, parallel } = require('gulp');
const sass = require('gulp-sass');
const minifyCSS = require('gulp-csso');
const cssBeautify = require('gulp-cssbeautify');
const terser = require('gulp-terser');
const rename = require("gulp-rename");

const files = "./src/**/*";

function showError (error) {
	console.log(error.toString())
	this.emit('end')
}

function css() {
    return src('./src/*.scss')
        .pipe(sass().on('error', showError))
        .pipe(cssBeautify({
            indent: "\t",
            autosemicolon: true
        }))
        .pipe(rename({ suffix: '' }))
        .pipe(dest('./dist/css'))
}

function css_min() {
    return src('./src/*.scss')
        .pipe(sass().on('error', showError))
        .pipe(minifyCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(dest('./dist/css'))
}

function js() {
    return src('./src/*.js')
        .pipe(rename({ suffix: '' }))
        .pipe(dest('./dist/js'))
}

function js_min() {
    return src('./src/*.js')
        .pipe(rename({ suffix: '.min' }))
        .pipe(terser({
            keep_fnames: true,
            mangle: false, 
            ecma: 6 
        }))
        .pipe(dest('./dist/js'))
}

exports.js = js;
exports.js_min = js_min;
exports.css = css;
exports.css_min = css_min;

exports.default = parallel(css, css_min, js, js_min);

watch(files, series(css, css_min, js, js_min));
