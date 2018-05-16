// Snapshot the ~/app.css and the theme
var application = require("application");
require("ui/styling/style-scope");
var appCssContext = require.context("~/", false, /^\.\/app\.(css|scss|less|sass)$/);
global.registerWebpackModules(appCssContext);
application.loadAppCss();
require("./vendor-platform");
require("bundle-entry-points");
