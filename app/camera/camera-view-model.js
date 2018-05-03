"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var nativescript_camera_1 = require("nativescript-camera");
var CameraViewModel = /** @class */ (function (_super) {
    __extends(CameraViewModel, _super);
    function CameraViewModel() {
        var _this = _super.call(this) || this;
        _this.saveToGallery = false;
        _this.cameraImage = "~/images/empty.jpg";
        _this.options = { width: 300, height: 300, keepAspectRatio: true, saveToGallery: _this.saveToGallery };
        return _this;
    }
    CameraViewModel.prototype.onTakePictureTap = function () {
        var _this = this;
        nativescript_camera_1.requestPermissions().then(function () {
            nativescript_camera_1.takePicture({ width: 300, height: 300, keepAspectRatio: true, saveToGallery: _this.saveToGallery }).
                then(function (imageAsset) {
                _this.set("cameraImage", imageAsset.android);
                // This where Tensorflow should come in and create a label for the image
            }, function (err) {
                console.log("Error -> " + err.message);
            });
        }, function () { return alert("permissions rejected"); });
    };
    CameraViewModel.prototype.setCameraFacing = function (facing) {
        if (facing) {
            return "rear";
        }
        else {
            return "front";
        }
    };
    return CameraViewModel;
}(observable_1.Observable));
exports.CameraViewModel = CameraViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FtZXJhLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYW1lcmEtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QywyREFBcUY7QUFPckY7SUFBcUMsbUNBQVU7SUFNM0M7UUFBQSxZQUNJLGlCQUFPLFNBSVY7UUFIRyxLQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztRQUMzQixLQUFJLENBQUMsV0FBVyxHQUFHLG9CQUFvQixDQUFDO1FBQ3hDLEtBQUksQ0FBQyxPQUFPLEdBQUcsRUFBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLE1BQU0sRUFBRSxHQUFHLEVBQUUsZUFBZSxFQUFFLElBQUksRUFBRSxhQUFhLEVBQUUsS0FBSSxDQUFDLGFBQWEsRUFBQyxDQUFDOztJQUN2RyxDQUFDO0lBRUQsMENBQWdCLEdBQWhCO1FBQUEsaUJBZUM7UUFkRyx3Q0FBa0IsRUFBRSxDQUFDLElBQUksQ0FDckI7WUFDSSxpQ0FBVyxDQUFDLEVBQUUsS0FBSyxFQUFFLEdBQUcsRUFBRSxNQUFNLEVBQUUsR0FBRyxFQUFFLGVBQWUsRUFBRSxJQUFJLEVBQUUsYUFBYSxFQUFFLEtBQUksQ0FBQyxhQUFhLEVBQUMsQ0FBQztnQkFDN0YsSUFBSSxDQUFDLFVBQUMsVUFBVTtnQkFDWixLQUFJLENBQUMsR0FBRyxDQUFDLGFBQWEsRUFBRSxVQUFVLENBQUMsT0FBTyxDQUFDLENBQUM7Z0JBQzVDLHdFQUF3RTtZQUU1RSxDQUFDLEVBQ0QsVUFBQyxHQUFHO2dCQUNBLE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztZQUMzQyxDQUFDLENBQUMsQ0FBQztRQUNYLENBQUMsRUFDRCxjQUFNLE9BQUEsS0FBSyxDQUFDLHNCQUFzQixDQUFDLEVBQTdCLENBQTZCLENBQ3RDLENBQUM7SUFDTixDQUFDO0lBRU8seUNBQWUsR0FBdkIsVUFBd0IsTUFBZTtRQUNuQyxFQUFFLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDO1lBQUEsTUFBTSxDQUFDLE1BQU0sQ0FBQztRQUFDLENBQUM7UUFBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxNQUFNLENBQUMsT0FBTyxDQUFDO1FBQ25CLENBQUM7SUFDTCxDQUFDO0lBQ0wsc0JBQUM7QUFBRCxDQUFDLEFBbkNELENBQXFDLHVCQUFVLEdBbUM5QztBQW5DWSwwQ0FBZSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IHRha2VQaWN0dXJlLCByZXF1ZXN0UGVybWlzc2lvbnMsIENhbWVyYU9wdGlvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWNhbWVyYVwiO1xyXG5pbXBvcnQgKiBhcyBpbWFnZVNvdXJjZU1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1zb3VyY2VcIjtcclxuaW1wb3J0IHsgSW1hZ2VBc3NldCB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLWFzc2V0L2ltYWdlLWFzc2V0XCI7XHJcbmltcG9ydCAqIGFzIGFwcE1vZHVsZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9hcHBsaWNhdGlvblwiO1xyXG5pbXBvcnQgeyBsYXlvdXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91dGlscy91dGlsc1wiO1xyXG5pbXBvcnQgKiBhcyB0cmFjZSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy90cmFjZVwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIENhbWVyYVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG5cclxuICAgIHB1YmxpYyBjYW1lcmFJbWFnZTogc3RyaW5nO1xyXG4gICAgcHVibGljIHNhdmVUb0dhbGxlcnk6IGJvb2xlYW47XHJcbiAgICBwcml2YXRlIG9wdGlvbnM6IENhbWVyYU9wdGlvbnM7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNhdmVUb0dhbGxlcnkgPSBmYWxzZTtcclxuICAgICAgICB0aGlzLmNhbWVyYUltYWdlID0gXCJ+L2ltYWdlcy9lbXB0eS5qcGdcIjtcclxuICAgICAgICB0aGlzLm9wdGlvbnMgPSB7d2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDAsIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZSwgc2F2ZVRvR2FsbGVyeTogdGhpcy5zYXZlVG9HYWxsZXJ5fTtcclxuICAgIH1cclxuXHJcbiAgICBvblRha2VQaWN0dXJlVGFwKCkge1xyXG4gICAgICAgIHJlcXVlc3RQZXJtaXNzaW9ucygpLnRoZW4oXHJcbiAgICAgICAgICAgICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRha2VQaWN0dXJlKHsgd2lkdGg6IDMwMCwgaGVpZ2h0OiAzMDAsIGtlZXBBc3BlY3RSYXRpbzogdHJ1ZSwgc2F2ZVRvR2FsbGVyeTogdGhpcy5zYXZlVG9HYWxsZXJ5fSkuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhlbigoaW1hZ2VBc3NldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNldChcImNhbWVyYUltYWdlXCIsIGltYWdlQXNzZXQuYW5kcm9pZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIFRoaXMgd2hlcmUgVGVuc29yZmxvdyBzaG91bGQgY29tZSBpbiBhbmQgY3JlYXRlIGEgbGFiZWwgZm9yIHRoZSBpbWFnZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIChlcnIpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJFcnJvciAtPiBcIiArIGVyci5tZXNzYWdlKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgKCkgPT4gYWxlcnQoXCJwZXJtaXNzaW9ucyByZWplY3RlZFwiKVxyXG4gICAgICAgICk7XHJcbiAgICB9XHJcblxyXG4gICAgcHJpdmF0ZSBzZXRDYW1lcmFGYWNpbmcoZmFjaW5nOiBib29sZWFuKTogc3RyaW5nIHtcclxuICAgICAgICBpZiAoZmFjaW5nKSB7cmV0dXJuIFwicmVhclwiOyB9IGVsc2Uge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJmcm9udFwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXX0=