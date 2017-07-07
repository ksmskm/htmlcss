const gulp       = require('gulp');
const livereload = require('gulp-livereload');

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('*.html', ['html']);
  gulp.watch('*.css', ['css']);
});

gulp.task('default', ['watch']);

gulp.task('html', function() {
  gulp.src('*.html').pipe(livereload());
});

gulp.task('css', function() {
  gulp.src('*.css').pipe(livereload());
});
