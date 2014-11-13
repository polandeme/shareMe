// 引入 gulp
var gulp = require('gulp'); 

// 引入组件
var jshint = require('gulp-jshint');
var less = require('gulp-less');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');

// 检查脚本
// gulp.task('lint', function() {
//     gulp.src('./js/*.js')
//         .pipe(jshint())
//         .pipe(jshint.reporter('default'));
// });

// 编译less
gulp.task('less', function() {
    gulp.src('./public/stylesheets/*.less')
        .pipe(less())
        .pipe(gulp.dest('./public/stylesheets'));
});

// 合并，压缩文件
// gulp.task('scripts', function() {
//     gulp.src('./js/*.js')
//         .pipe(concat('all.js'))
//         .pipe(gulp.dest('./dist'))
//         .pipe(rename('all.min.js'))
//         .pipe(uglify())
//         .pipe(gulp.dest('./dist'));
// });

// 默认任务
gulp.task('default', function(){
    gulp.run('less');

    // 监听文件变化
    gulp.watch('./js/*.js', function(){
        gulp.run('lint', 'less', 'scripts');
    });
});