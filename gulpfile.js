const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');
const browserSync = require('browser-sync').create();

function sassCompiler() {
    // queremos pegar todos os arquivos scss
    return gulp.src('css/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    // gulp injeta os módulos num mesmo style.css
    .pipe(gulp.dest('css/'))
    .pipe(browserSync.stream())
}

gulp.task('sass', gulp.series(sassCompiler));

// watch está sempre observando caso haja mudanças no arquivo especificado
function watch() {
    gulp.watch('css/scss/*.scss', sassCompiler);
}

function browser() {
    browserSync.init({
        server: {
            baseDir: "./"
        }
    })
}

gulp.task('watch', watch)

gulp.task('browser-sync', browser)

// tasks
gulp.task('default', gulp.parallel('watch', 'browser-sync'))