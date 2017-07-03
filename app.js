var bs = require("browser-sync").create();

//тут
bs.watch(['jQuery/sobytiya/*.*']).on("change", bs.reload);

// Start a Browsersync proxy
bs.init({
  server: "./jQuery/sobytiya"
});