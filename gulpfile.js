var gulp = require('gulp'),
    concat = require('gulp-concat'),
    pug = require('gulp-pug'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin'),
    watch = require('gulp-watch');

gulp.task('html', function buildHTML() {
    return gulp.src('app/pug/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('public'));
});

gulp.task('styles', function buildStyles(){
    return gulp.src('app/css/*.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('public/css'))
});

gulp.task('scripts', function() {
    return gulp.src(['app/js/custom.min.js', 'app/js/datatables.js', 'app/js/lower-chart.js'])
        .pipe(gulp.dest('public/js'));
});

gulp.task('images', function() {
    return gulp.src('app/img/**/*')
        .pipe(imagemin({optimizationLevel: 5}))
        .pipe(gulp.dest('public/images'));
});

gulp.task('watch', function() {
    gulp.watch('app/pug/*', ['html']);
});

gulp.task('default', ['html','styles','scripts','images']);