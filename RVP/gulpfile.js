/**
 * Created by Dani on 12.12.2016.
 */


// Include gulp
const gulp = require('gulp');

// Include Our Plugins
const concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    eslint = require('gulp-eslint');

/*
// Concatenate & Minify JS
gulp.task('scripts', function() {
    return gulp.src('*.js')
        .pipe(concat('all.js'))
        .pipe(gulp.dest('dist'))
});*/

gulp.task('lint', () => {
    return gulp.src(['**/*.js','!node_modules/**','!public/bootstrap/**'])
    .pipe(eslint())
    .pipe(eslint.format());
});


// Default Task
gulp.task('default', ['lint']);