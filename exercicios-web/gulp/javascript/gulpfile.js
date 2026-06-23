const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat') // junta varios arquivos em um so
const uglify = require('gulp-uglify') // minifica o codigo
const babel = require('gulp-babel') // transforma o codigo para um formato mais compativel com o navegador

function transformacaoJS(cb) {
    return gulp.src('src/**/*.js')
        .pipe(babel({
            comments: false,
            presets: ["env"]
        }))
        .pipe(uglify())
        .on('error', err => console.log(err))
        .pipe(concat('codigo.min.js'))
        .pipe(gulp.dest('build'))
}

function fim(cb) {
    console.log('Fim!!!')
    return cb()
}

exports.default = series(transformacaoJS, fim)