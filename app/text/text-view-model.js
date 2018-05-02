"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var nativescript_texttospeech_1 = require("nativescript-texttospeech");
var TextViewModel = /** @class */ (function (_super) {
    __extends(TextViewModel, _super);
    function TextViewModel() {
        var _this = _super.call(this) || this;
        _this.speakText = "";
        _this.textToSpeech = new nativescript_texttospeech_1.TNSTextToSpeech();
        _this.options = {
            text: _this.speakText,
            speakRate: 0.5,
            pitch: 1.0,
            volume: 1.0,
            locale: "NL-NL"
        };
        return _this;
    }
    TextViewModel.prototype.speak = function () {
        this.options.text = this.speakText;
        this.textToSpeech.speak(this.options);
    };
    TextViewModel.prototype.clearText = function () {
        this.set("speakText", "");
    };
    return TextViewModel;
}(observable_1.Observable));
exports.TextViewModel = TextViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGV4dC12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsidGV4dC12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLHVFQUEwRTtBQUUxRTtJQUFtQyxpQ0FBVTtJQU16QztRQUFBLFlBQ0ksaUJBQU8sU0FVVjtRQVRHLEtBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDO1FBQ3BCLEtBQUksQ0FBQyxZQUFZLEdBQUcsSUFBSSwyQ0FBZSxFQUFFLENBQUM7UUFDMUMsS0FBSSxDQUFDLE9BQU8sR0FBRztZQUNYLElBQUksRUFBRSxLQUFJLENBQUMsU0FBUztZQUNwQixTQUFTLEVBQUUsR0FBRztZQUNkLEtBQUssRUFBRSxHQUFHO1lBQ1YsTUFBTSxFQUFFLEdBQUc7WUFDWCxNQUFNLEVBQUUsT0FBTztTQUNsQixDQUFDOztJQUNOLENBQUM7SUFFRCw2QkFBSyxHQUFMO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUNuQyxJQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVELGlDQUFTLEdBQVQ7UUFDSSxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxFQUFFLENBQUMsQ0FBQztJQUM5QixDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBM0JELENBQW1DLHVCQUFVLEdBMkI1QztBQTNCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFROU1RleHRUb1NwZWVjaCwgU3BlYWtPcHRpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC10ZXh0dG9zcGVlY2hcIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBUZXh0Vmlld01vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XHJcblxyXG4gICAgcHVibGljIHNwZWFrVGV4dDogc3RyaW5nO1xyXG4gICAgcHJpdmF0ZSBvcHRpb25zOiBTcGVha09wdGlvbnM7XHJcbiAgICBwcml2YXRlIHRleHRUb1NwZWVjaDogVE5TVGV4dFRvU3BlZWNoO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zcGVha1RleHQgPSBcIlwiO1xyXG4gICAgICAgIHRoaXMudGV4dFRvU3BlZWNoID0gbmV3IFROU1RleHRUb1NwZWVjaCgpO1xyXG4gICAgICAgIHRoaXMub3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgdGV4dDogdGhpcy5zcGVha1RleHQsXHJcbiAgICAgICAgICAgIHNwZWFrUmF0ZTogMC41LFxyXG4gICAgICAgICAgICBwaXRjaDogMS4wLFxyXG4gICAgICAgICAgICB2b2x1bWU6IDEuMCxcclxuICAgICAgICAgICAgbG9jYWxlOiBcIk5MLU5MXCJcclxuICAgICAgICB9O1xyXG4gICAgfVxyXG5cclxuICAgIHNwZWFrKCkge1xyXG4gICAgICAgIHRoaXMub3B0aW9ucy50ZXh0ID0gdGhpcy5zcGVha1RleHQ7XHJcbiAgICAgICAgdGhpcy50ZXh0VG9TcGVlY2guc3BlYWsodGhpcy5vcHRpb25zKTtcclxuICAgIH1cclxuXHJcbiAgICBjbGVhclRleHQoKSB7XHJcbiAgICAgICAgdGhpcy5zZXQoXCJzcGVha1RleHRcIiwgXCJcIik7XHJcbiAgICB9XHJcbn1cclxuIl19