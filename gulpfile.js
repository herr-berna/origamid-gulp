const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const autoprefixer = require('gulp-autoprefixer');

function sassCompiler() {
    // queremos pegar todos os arquivos scss
    return gulp.src('css/scss/*.scss')
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(autoprefixer({
        cascade: false
    }))
    // gulp injeta os módulos num mesmo style.css
    .pipe(gulp.dest('css/'))
}

gulp.task('sass', gulp.series(sassCompiler));

//apenas ideias ruminando a própria morte
// watch está sempre observando caso haja mudanças no arquivo especificado
function watch() {
    gulp.watch('css/scss/*.scss', sassCompiler)
}

gulp.task('default')