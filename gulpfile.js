const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

function buildStyles() {
  return src("SASS_StyleSheets/**/*.scss").pipe(sass()).pipe(dest("css"));
}

function watchTask() {
  watch(["SASS_StyleSheets/**/*.scss"], buildStyles);
}

exports.default = series(buildStyles, watchTask);
