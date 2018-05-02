"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var speech_view_model_1 = require("./speech-view-model");
// Event handler for Page 'loaded' event attached in main-page.xml
function pageLoaded(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new speech_view_model_1.SpeechViewModel();
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVlY2gtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlEQUFzRDtBQUV0RCxrRUFBa0U7QUFDbEUsb0JBQTJCLElBQTBCO0lBQ2pELHVCQUF1QjtJQUN2QixJQUFJLElBQUksR0FBZSxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ25DLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxtQ0FBZSxFQUFFLENBQUM7QUFDaEQsQ0FBQztBQUpELGdDQUlDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgb2JzZXJ2YWJsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGVcIjtcclxuaW1wb3J0ICogYXMgcGFnZXMgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvdWkvcGFnZVwiO1xyXG5pbXBvcnQgeyBTcGVlY2hWaWV3TW9kZWwgfSBmcm9tIFwiLi9zcGVlY2gtdmlldy1tb2RlbFwiO1xyXG5cclxuLy8gRXZlbnQgaGFuZGxlciBmb3IgUGFnZSAnbG9hZGVkJyBldmVudCBhdHRhY2hlZCBpbiBtYWluLXBhZ2UueG1sXHJcbmV4cG9ydCBmdW5jdGlvbiBwYWdlTG9hZGVkKGFyZ3M6IG9ic2VydmFibGUuRXZlbnREYXRhKSB7XHJcbiAgICAvLyBHZXQgdGhlIGV2ZW50IHNlbmRlclxyXG4gICAgbGV0IHBhZ2UgPSA8cGFnZXMuUGFnZT5hcmdzLm9iamVjdDtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgU3BlZWNoVmlld01vZGVsKCk7XHJcbn1cclxuIl19