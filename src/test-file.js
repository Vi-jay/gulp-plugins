const gzip = require('gulp-gzip');
const gulp = require('gulp');

function gzipTask() {
    return gulp.src('./src/**/*.js')
        .pipe(gzip({threshold: false, gzipOptions: {level: 9}}))
        .pipe(gulp.dest('./dist'))
}

exports.default = gzipTask