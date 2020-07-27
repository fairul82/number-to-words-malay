'use strict';

let fs = require('fs');
let gulp = require('gulp');
let gulpPlugins = {
    concat: require('gulp-concat'),
    rename: require('gulp-rename'),
    replace: require('gulp-replace'),
    uglify: require('gulp-uglify'),
    wrap: require('gulp-wrap')
};
let log = require('fancy-log');
let license = require('uglify-save-license');

let pkg = require('./package.json');

function bundleTask() {
    let USE_STRICT_PATTERN = /(['"]use strict['"];?\n?)/g;
    let REQUIRE_PATTERN = /((?:let |,)[^=]+=\s*require\([^\)]+\);?\n?)/g;
    let EXPORT_PATTERN = /((?:module\.)?exports\s*=\s*[^,;]+;?\n?)/g;

    let files = [
        './src/toWords.js'
    ];

    return gulp.src(files)
        .on('error', log.error)
        .pipe(gulpPlugins.replace(USE_STRICT_PATTERN, ''))
        .pipe(gulpPlugins.replace(REQUIRE_PATTERN, ''))
        .pipe(gulpPlugins.replace(EXPORT_PATTERN, ''))
        .pipe(gulpPlugins.concat('numberToWordsMalay.js'))
        .pipe(gulp.dest('./'))
}

module.exports = {
    build: gulp.parallel(bundleTask)
};