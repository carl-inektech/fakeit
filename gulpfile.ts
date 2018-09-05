const gulp = require('gulp');
const ts = require('gulp-typescript');
const merge = require('merge2');
const karma = require('karma').Server;

gulp.task('build', function() {
    const tsProject = ts.createProject('tsconfig.json');

    var tsResult = tsProject.src()
        .pipe(tsProject());

    return merge([
        tsResult.dts.pipe(gulp.dest('./definitions')),
        tsResult.js.pipe(
            gulp.dest(tsProject.config.compilerOptions.outDir)
        )
    ]);
});

gulp.task('test', function (done) {
    new karma({
        configFile: __dirname + '/karma.conf.js',
        singleRun: true
    }, done).start();
});

gulp.task('default', ['build']);

gulp.task('all', ['build', 'test']);