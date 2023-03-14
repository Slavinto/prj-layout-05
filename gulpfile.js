import gulp from "gulp";
import { path } from "./gulp/config/paths.js";
import { plugins } from "./gulp/config/plugins.js";

global.app = {
  isBuild: process.argv.includes("--build"),
  idDev: !process.argv.includes("--build"),
  gulp,
  path,
  plugins,
};

// importing tasks
import { copy } from "./gulp/tasks/copy.js";
// removes dist folder
import { reset } from "./gulp/tasks/reset.js";
// copy html files to dist folder
import { html } from "./gulp/tasks/html.js";
// server for auto update
import { server } from "./gulp/tasks/server.js";
// styles
import { scss } from "./gulp/tasks/scss.js";
// handling js files
import { js } from "./gulp/tasks/js.js";
// converting and compressing images
import { images } from "./gulp/tasks/images.js";
// fonts
import { otfToTtf, ttfToWoff, fontsStyle } from "./gulp/tasks/fonts.js";
// handling sprite icons
import { makeSvgSprite } from "./gulp/tasks/svgSprite.js";
// archiving
import { zip } from "./gulp/tasks/zip.js";
// ftp
import { ftp } from "./gulp/tasks/ftp.js";

// defining watchers
function watcher() {
  gulp.watch(path.watch.files, copy);
  gulp.watch(path.watch.images, images);
  gulp.watch(path.watch.html, html); // , gulp.series(html, ftp)
  gulp.watch(path.watch.scss, scss);
  gulp.watch(path.watch.js, js);
}

export { makeSvgSprite };

// working with fonts
const fonts = gulp.series(otfToTtf, ttfToWoff, fontsStyle);

// main tasks
const mainTasks = gulp.series(
  fonts,
  gulp.parallel(copy, images, html, scss, js)
);

// defining scenarios
const dev = gulp.series(reset, mainTasks, gulp.parallel(watcher, server));
const build = gulp.series(reset, mainTasks);
const deployZip = gulp.series(reset, mainTasks, zip);
const deployFTP = gulp.series(reset, mainTasks, ftp);

// exporting scenarios
export { dev };
export { build };
export { deployZip };
export { deployFTP };

// executing tasks
gulp.task("default", dev);
