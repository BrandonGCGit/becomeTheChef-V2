const { src, dest, watch, series } = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const postcss = require('gulp-postcss');
const cssnano = require('cssnano');
const terser = require('gulp-terser');
const browsersync = require('browser-sync').create();

// Sass Task
function scssTask(){
  return src('dev/scss/main.scss', { sourcemaps: true })
    .pipe(sass())
    .pipe(postcss([cssnano()]))
    .pipe(dest('dist/css', { sourcemaps: '.' }));
}

//! JavaScript Task
function jsTask(){
    return src('dev/js/script.js', { sourcemaps: true })
      .pipe(terser())
      .pipe(dest('dist', { sourcemaps: '.' }));
  }
  
  //* Browsersync Tasks
  function browsersyncServe(cb){
    // browsersync.init({
    //   server: {
    //     ui:{
    //       port: 80
    //     },
    //     proxy: 'http://localhost/BecomeTheChef-V2-2023/dist/'
    //   }
    // });
    browsersync.init({
      injectChanges: true,
      open: false,
      proxy: "http://localhost/BecomeTheChef-V2-2023/dist/",
  });
    cb();
  }
  function browsersyncReload(cb){
    browsersync.reload();
    cb();
  }
  
  //! Watch Task
  function watchTask(){
    watch('*.html', browsersyncReload);
    watch(['dev/scss/**/*.scss', 'dev/js/**/*.js'], series(scssTask, jsTask, browsersyncReload));
  }
  
  //@ Default Gulp task
  exports.default = series(
    scssTask,
    jsTask,
    browsersyncServe,
    watchTask
  );