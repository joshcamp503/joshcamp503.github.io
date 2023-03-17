const gulp = require("gulp");
const sass = require('gulp-sass')(require('sass'))
const browserify = require("browserify");
const source = require("vinyl-source-stream");
const terser = require("gulp-terser");
const watchify = require("watchify");
const tsify = require("tsify");
const fancy_log = require("fancy-log");
const sourcemaps = require("gulp-sourcemaps");
const buffer = require("vinyl-buffer");

const paths = {
  pages: ["src/*.html", "src/styles/*.css"],
};

const watchedBrowserify = watchify(
  browserify({
    basedir: ".",
    debug: true,
    entries: ["src/main.ts"],
    cache: {},
    packageCache: {},
  })
);

gulp.task("copy-html", function () {
  return gulp.src(paths.pages)
    .pipe(gulp.dest("dist"));
});

gulp.task('sass', function() {
  return gulp.src('src/index.scss')
    .pipe(sass())
    .pipe(gulp.dest('dist'))
})

gulp.task('watch', function() {
  gulp.watch('src/index.scss', gulp.series('sass'))
  gulp.watch('src/index.html', gulp.series("copy-html"))
})

function bundle() {
  return watchedBrowserify
    .plugin(tsify)
    .transform("babelify", {
      presets: ["es2015"],
      extensions: [".ts"],
    })
    .bundle()
    .on("error", fancy_log)
    .pipe(source("bundle.js"))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(terser())
    .pipe(sourcemaps.write("./"))
    .pipe(gulp.dest("dist"));

}

gulp.task("default", gulp.series(gulp.parallel("copy-html", "sass", "watch", bundle)));
watchedBrowserify.on("update", bundle);
watchedBrowserify.on("log", fancy_log);