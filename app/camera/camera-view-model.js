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
