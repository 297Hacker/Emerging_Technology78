"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var speech_view_model_1 = require("./speech-view-model");
function pageLoaded(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new speech_view_model_1.SpeechViewModel();
}
exports.pageLoaded = pageLoaded;
