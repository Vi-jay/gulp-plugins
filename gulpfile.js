const gzip = require('gulp-gzip');
const clean = require('gulp-clean');
const gulp = require('gulp');

function gzipTask() {
    return gulp.src('./src/**/*.js')
        //如果需要.gz结尾则将append改为true
        .pipe(gzip({threshold: false, append: false, gzipOptions: {level: 9}}))
        .pipe(gulp.dest('./dist'))
}
function cleanTask() {
    return gulp.src('./dist')
        .pipe(clean({force: true}))
}

exports.default = gulp.series(cleanTask,gzipTask)