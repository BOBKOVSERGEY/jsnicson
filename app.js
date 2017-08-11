var bs = require("browser-sync").create();

//тут
bs.watch(['jQuery/html/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./jQuery/html"
});