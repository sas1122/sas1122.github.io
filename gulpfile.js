var gulp = require("gulp");
var handlebars = require("gulp-compile-handlebars");
var rename = require("gulp-rename");
var runSequence = require('run-sequence');
var browsersync = require("browser-sync").create();

gulp.task("html", ()=> {
  return gulp.src("*.hbs")
  .pipe(handlebars({}, {
    batch: ["./partials"]
  }))
  .pipe(rename({
    extname: ".html"
  }))
  .pipe(gulp.dest('./'))
})

gulp.task("hello", () =>{
  console.log("Hello Friends");
})

gulp.task("browserSync", () => {
  browsersync.init({
    server:{
      baseDir: "./"
    }
  })
})

gulp.task("watch", ()=>{
  gulp.watch("./**/*.hbs", gulp.series("html"));
  // gulp.watch("./**/*.css", gulp.series("html"));
  // gulp.watch("./**/*.js", gulp.series("html"));
  gulp.watch("./**/*.hbs", gulp.series("browserSync"));
  // gulp.watch("./**/*.css", gulp.series("browserSync"));
  // gulp.watch("./**/*.js", gulp.series("browserSync"));
})
