import gulp from "gulp";
import { path } from "./gulp/config/paths.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  gulp,
  path,
  plugins,
};

// importing tasks
import { copy } from "./gulp/tasks/copy.js";
import { reset } from "./gulp/tasks/reset.js"; // removes dist folder
import { html } from "./gulp/tasks/html.js"; // copy html files to dist folder

// defining watchers
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.html, html);
}

// main tasks
const mainTasks = gulp.parallel(copy, html);

// defining scenarios
const dev = gulp.series(reset, mainTasks, watcher);

// executing tasks
gulp.task("default", dev);
