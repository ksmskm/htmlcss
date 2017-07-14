const gulp       = require('gulp');
const livereload = require('gulp-livereload');

gulp.task('watch', function () {
  livereload.listen();
  gulp.watch('index.html', ['html']);
  gulp.watch('./assets/stylesheets/main.css', ['css']);
});

gulp.task('default', ['watch']);

gulp.task('html', function() {
  gulp.src('index.html').pipe(livereload());
});

gulp.task('css', function() {
  gulp.src('./assets/stylesheets/main.css').pipe(livereload());
});
