"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camera_view_model_1 = require("./camera-view-model");
function pageLoaded(args) {
    // This function will be executed when the page is loaded
}
exports.pageLoaded = pageLoaded;
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new camera_view_model_1.CameraViewModel();
}
exports.onNavigatingTo = onNavigatingTo;
