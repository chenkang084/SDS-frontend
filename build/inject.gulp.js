var path = require('path');
var gulp = require('gulp');
var inject = require('gulp-inject');



gulp.task("inject", function() {

    var target = gulp.src('./app/index.html');
    var sources = gulp.src(['./app/scripts/vendor.js'], { read: false },{relative: false});

    return target.pipe(inject(sources))
        .pipe(gulp.dest('./dist'));
})