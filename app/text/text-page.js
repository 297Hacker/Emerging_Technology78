"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var text_view_model_1 = require("./text-view-model");
function pageLoaded(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new text_view_model_1.TextViewModel();
}
exports.pageLoaded = pageLoaded;
