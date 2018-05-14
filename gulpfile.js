var gulp          = require("gulp");
    browserSync   = require("browser-sync").create(),
    sass          = require("gulp-sass"),
    sourcemaps    = require('gulp-sourcemaps'),    
    historyApi    = require('connect-history-api-fallback');

// PATHS SRC
var paths = {
    html: {
        input:  'app/**/*.html'
    },
    sass: {
        input:  'app/assets/scss/**/*.scss',
        output: 'app/assets/css'
    },
    server: {
        input:  ['app/**/*.html', 'app/**/*.js']
    }   
};


gulp.task("serve", ["sass"], function() {
    browserSync.init({
        server: "app",
        middleware: [ historyApi() ]
    });

    gulp.watch(paths.sass.input, ["sass"]);
    gulp.watch([paths.server.input]).on("change", browserSync.reload);
});

// CSS
gulp.task("sass", function() {
    return gulp.src(paths.sass.input)
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: "compressed"
        }).on("error", sass.logError))
        .pipe(sourcemaps.write('.'))
        .pipe(gulp.dest(paths.sass.output))
        .pipe(browserSync.stream());
});

gulp.task("default", ["serve"]);