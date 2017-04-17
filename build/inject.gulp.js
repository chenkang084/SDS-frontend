var path = require('path');
var gulp = require('gulp');
var inject = require('gulp-inject');
var rev = require('gulp-rev');
var rename = require("gulp-rename");
var exec = require('child_process').exec;
var gulpif = require('gulp-if');
var uglify = require('gulp-uglify');


gulp.task("inject", function() {
    return gulp.src('./app/index.html')
        .pipe(inject(gulp.src(['./app/library/vendor-*.js'], { read: false }), {
            ignorePath: 'app',
            addRootSlash: false,
            // relative:false
        }))
        .pipe(gulp.dest('./app'));
});

gulp.task("rename", function() {
    console.log("==============="+process.env.NODE_ENV)
    gulp.src('./app/library/vendor.js')
        .pipe(gulpif(process.env.NODE_ENV === 'prod', uglify())) // 仅在生产环境时候进行压缩
        .pipe(rename("./vendor-" + new Date().getTime() + ".js"))
        .pipe(gulp.dest("./app/library/"))
})


gulp.task("run-dev", ["inject"])