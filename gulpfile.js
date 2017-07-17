var gulp = require('gulp'),
    browserSync = require('browser-sync').create(),
    clean = require('gulp-clean'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    jshint = require('gulp-jshint'),
    plumber = require('gulp-plumber'),
    textTransformation = require('gulp-text-simple'),
    replace = require('gulp-replace'),
    rename = require("gulp-rename"),
    jshintStylish = require('jshint-stylish');

var transformString = function(s) {
    return s;
};

var myTransformation = textTransformation(transformString);

gulp.task('copyJs', ['js'], function() {
    var textReplace = myTransformation.readFileSync('tmp/index.js');
    return gulp.src(['src/js/CentiChat.js'])
        .pipe(replace('/*injectAllClassesHere*/', textReplace))
        .pipe(rename('centi.chat.jquery.min.js'))
        .pipe(gulp.dest('build/'))
        .pipe(gulp.dest('demo/'));
});

gulp.task('js', ['clean'], function() {
    return gulp.src(
            [
                "src/js/CentiUtils.js",
                "src/js/CentiChatConnection.js",
                "src/js/CentiChatMinWindow.js",
                "src/js/CentiChatWindow.js",
                "src/js/CentiChatTheme.js",
            ]
        )
        .pipe(plumber())
        //.pipe(uglify())
        .pipe(concat('index.js'))
        .pipe(gulp.dest('tmp/'));
});

gulp.task('default', ['copy'], function() {
    gulp.start('build-img', 'usemin');
});

gulp.task('copy', ['clean'], function() {
    return gulp.src('src/**/*')
        .pipe(gulp.dest('build'));
});

gulp.task('clean', function() {
    return gulp.src(['demo/', 'build/'])
        .pipe(clean());
});


gulp.task('usemin', ['clean'], function() {
    return gulp.src('src/*.html')
        .pipe(usemin({
            //js: [uglify],
        }))
        .pipe(gulp.dest('demo'));
});

gulp.task('libs', ['clean'], function() {
    return gulp.src([
            'bower_components/jquery/dist/jquery.min.js'
        ])
        .pipe(plumber())
        //.pipe(uglify())
        .pipe(gulp.dest('demo/libs/'));
});

gulp.task('js-watch', ['libs', 'js', 'copyJs', 'usemin'], function(done) {
    browserSync.reload();
    done();
});

gulp.task('server', ['libs', 'js', 'copyJs', 'usemin'], function() {
    browserSync.init({
        server: {
            baseDir: 'demo'
        }
    });

    gulp.watch("src/**/*", ['js-watch']);

});