"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var speech_view_model_1 = require("./speech-view-model");
function pageLoaded(args) {
    // Get the event sender
    var page = args.object;
    page.bindingContext = new speech_view_model_1.SpeechViewModel();
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVlY2gtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlEQUFzRDtBQUV0RCxvQkFBMkIsSUFBMEI7SUFDakQsdUJBQXVCO0lBQ3ZCLElBQUksSUFBSSxHQUFlLElBQUksQ0FBQyxNQUFNLENBQUM7SUFDbkMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLG1DQUFlLEVBQUUsQ0FBQztBQUNoRCxDQUFDO0FBSkQsZ0NBSUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBvYnNlcnZhYmxlIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2RhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgKiBhcyBwYWdlcyBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9wYWdlXCI7XHJcbmltcG9ydCB7IFNwZWVjaFZpZXdNb2RlbCB9IGZyb20gXCIuL3NwZWVjaC12aWV3LW1vZGVsXCI7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBvYnNlcnZhYmxlLkV2ZW50RGF0YSkge1xyXG4gICAgLy8gR2V0IHRoZSBldmVudCBzZW5kZXJcclxuICAgIGxldCBwYWdlID0gPHBhZ2VzLlBhZ2U+YXJncy5vYmplY3Q7XHJcbiAgICBwYWdlLmJpbmRpbmdDb250ZXh0ID0gbmV3IFNwZWVjaFZpZXdNb2RlbCgpO1xyXG59XHJcbiJdfQ==