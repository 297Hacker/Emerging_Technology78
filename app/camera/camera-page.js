"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var camera_view_model_1 = require("./camera-view-model");
// Event handler for Page 'loaded' event attached in main-page.xml
function pageLoaded(args) {
    // Get the event sender
}
exports.pageLoaded = pageLoaded;
function onNavigatingTo(args) {
    var page = args.object;
    page.bindingContext = new camera_view_model_1.CameraViewModel();
}
exports.onNavigatingTo = onNavigatingTo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLXBhZ2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYW1lcmEtcGFnZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUVBLHlEQUFzRDtBQUV0RCxrRUFBa0U7QUFDbEUsb0JBQTJCLElBQTBCO0lBQ2pELHVCQUF1QjtBQUUzQixDQUFDO0FBSEQsZ0NBR0M7QUFFRCx3QkFBK0IsSUFBMEI7SUFDckQsSUFBSSxJQUFJLEdBQWUsSUFBSSxDQUFDLE1BQU0sQ0FBQztJQUNuQyxJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksbUNBQWUsRUFBRSxDQUFDO0FBQ2hELENBQUM7QUFIRCx3Q0FHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIG9ic2VydmFibGUgZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCAqIGFzIHBhZ2VzIGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL3VpL3BhZ2VcIjtcclxuaW1wb3J0IHsgQ2FtZXJhVmlld01vZGVsIH0gZnJvbSBcIi4vY2FtZXJhLXZpZXctbW9kZWxcIjtcclxuXHJcbi8vIEV2ZW50IGhhbmRsZXIgZm9yIFBhZ2UgJ2xvYWRlZCcgZXZlbnQgYXR0YWNoZWQgaW4gbWFpbi1wYWdlLnhtbFxyXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBvYnNlcnZhYmxlLkV2ZW50RGF0YSkge1xyXG4gICAgLy8gR2V0IHRoZSBldmVudCBzZW5kZXJcclxuXHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBvbk5hdmlnYXRpbmdUbyhhcmdzOiBvYnNlcnZhYmxlLkV2ZW50RGF0YSkge1xyXG4gICAgbGV0IHBhZ2UgPSA8cGFnZXMuUGFnZT5hcmdzLm9iamVjdDtcclxuICAgIHBhZ2UuYmluZGluZ0NvbnRleHQgPSBuZXcgQ2FtZXJhVmlld01vZGVsKCk7XHJcbn1cclxuIl19