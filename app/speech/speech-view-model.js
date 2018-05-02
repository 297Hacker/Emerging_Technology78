"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var nativescript_speech_recognition_1 = require("nativescript-speech-recognition");
var SpeechViewModel = /** @class */ (function (_super) {
    __extends(SpeechViewModel, _super);
    function SpeechViewModel() {
        var _this = _super.call(this) || this;
        _this.feedback = "Pick a language and say something...";
        _this.listening = false;
        _this.speech = new nativescript_speech_recognition_1.SpeechRecognition();
        return _this;
    }
    SpeechViewModel.prototype.startListeningDefault = function () {
        this.startListening();
    };
    SpeechViewModel.prototype.startListeningNL = function () {
        this.startListening("nl-NL");
    };
    SpeechViewModel.prototype.startListeningEN = function () {
        this.startListening("en-US");
    };
    SpeechViewModel.prototype.startListening = function (locale) {
        var that = this;
        this.speech.available().then(function (avail) {
            if (!avail) {
                that.set("feedback", "speech recognition not available");
                return;
            }
            that.speech.startListening({
                onResult: function (transcription) {
                    that.set("feedback", transcription.text);
                    if (transcription.finished) {
                        that.set("listening", false);
                    }
                },
                returnPartialResults: true,
                locale: locale
            }).then(function (started) {
                that.set("listening", true);
            }, function (errorMessage) {
                console.log("Error while trying to start listening: " + errorMessage);
            });
        });
    };
    SpeechViewModel.prototype.stopListening = function () {
        var that = this;
        this.speech.stopListening().then(function () {
            that.set("listening", false);
        }, function (errorMessage) {
            console.log("Error while trying to stop listening: " + errorMessage);
        });
    };
    SpeechViewModel.prototype.requestPermission = function () {
        var that = this;
        this.speech.requestPermission().then(function (granted) {
            console.log("Granted? " + granted);
        });
    };
    return SpeechViewModel;
}(observable_1.Observable));
exports.SpeechViewModel = SpeechViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVlY2gtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QyxtRkFBb0c7QUFFcEc7SUFBcUMsbUNBQVU7SUFNM0M7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFOTSxjQUFRLEdBQVcsc0NBQXNDLENBQUM7UUFDMUQsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUk5QixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksbURBQWlCLEVBQUUsQ0FBQzs7SUFDMUMsQ0FBQztJQUVNLCtDQUFxQixHQUE1QjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sMENBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sMENBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUksd0NBQWMsR0FBckIsVUFBc0IsTUFBZTtRQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFjO1lBQzFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNLENBQUM7WUFDVCxDQUFDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQ3RCO2dCQUNFLFFBQVEsRUFBRSxVQUFDLGFBQTZDO29CQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDL0IsQ0FBQztnQkFDSCxDQUFDO2dCQUNELG9CQUFvQixFQUFFLElBQUk7Z0JBQzFCLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FDSixDQUFDLElBQUksQ0FBQyxVQUFDLE9BQWdCO2dCQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM5QixDQUFDLEVBQUUsVUFBQyxZQUFvQjtnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBMEMsWUFBYyxDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSx1Q0FBYSxHQUFwQjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUUsVUFBQyxZQUFvQjtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUF5QyxZQUFjLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSwyQ0FBaUIsR0FBeEI7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQWdCO1lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNQLHNCQUFDO0FBQUQsQ0FBQyxBQWpFRCxDQUFxQyx1QkFBVSxHQWlFOUM7QUFqRVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTcGVlY2hSZWNvZ25pdGlvbiwgU3BlZWNoUmVjb2duaXRpb25UcmFuc2NyaXB0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zcGVlY2gtcmVjb2duaXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGVlY2hWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuXHJcbiAgICBwcml2YXRlIHNwZWVjaDogU3BlZWNoUmVjb2duaXRpb247XHJcbiAgICBwdWJsaWMgZmVlZGJhY2s6IHN0cmluZyA9IFwiUGljayBhIGxhbmd1YWdlIGFuZCBzYXkgc29tZXRoaW5nLi4uXCI7XHJcbiAgICBwdWJsaWMgbGlzdGVuaW5nOiBib29sZWFuID0gZmFsc2U7XHJcblxyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICB0aGlzLnNwZWVjaCA9IG5ldyBTcGVlY2hSZWNvZ25pdGlvbigpO1xyXG4gICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydExpc3RlbmluZ0RlZmF1bHQoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGFydExpc3RlbmluZygpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgcHVibGljIHN0YXJ0TGlzdGVuaW5nTkwoKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGFydExpc3RlbmluZyhcIm5sLU5MXCIpO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgcHVibGljIHN0YXJ0TGlzdGVuaW5nRU4oKTogdm9pZCB7XHJcbiAgICAgICAgdGhpcy5zdGFydExpc3RlbmluZyhcImVuLVVTXCIpO1xyXG4gICAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0TGlzdGVuaW5nKGxvY2FsZT86IHN0cmluZyk6IHZvaWQge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgIFxyXG4gICAgICAgIHRoaXMuc3BlZWNoLmF2YWlsYWJsZSgpLnRoZW4oKGF2YWlsOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICBpZiAoIWF2YWlsKSB7XHJcbiAgICAgICAgICAgIHRoYXQuc2V0KFwiZmVlZGJhY2tcIiwgXCJzcGVlY2ggcmVjb2duaXRpb24gbm90IGF2YWlsYWJsZVwiKTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgfVxyXG4gICAgICAgICAgdGhhdC5zcGVlY2guc3RhcnRMaXN0ZW5pbmcoXHJcbiAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgb25SZXN1bHQ6ICh0cmFuc2NyaXB0aW9uOiBTcGVlY2hSZWNvZ25pdGlvblRyYW5zY3JpcHRpb24pID0+IHtcclxuICAgICAgICAgICAgICAgICAgdGhhdC5zZXQoXCJmZWVkYmFja1wiLCB0cmFuc2NyaXB0aW9uLnRleHQpO1xyXG4gICAgICAgICAgICAgICAgICBpZiAodHJhbnNjcmlwdGlvbi5maW5pc2hlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoYXQuc2V0KFwibGlzdGVuaW5nXCIsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHJldHVyblBhcnRpYWxSZXN1bHRzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbG9jYWxlOiBsb2NhbGVcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICApLnRoZW4oKHN0YXJ0ZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgICAgdGhhdC5zZXQoXCJsaXN0ZW5pbmdcIiwgdHJ1ZSk7XHJcbiAgICAgICAgICB9LCAoZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHdoaWxlIHRyeWluZyB0byBzdGFydCBsaXN0ZW5pbmc6ICR7ZXJyb3JNZXNzYWdlfWApO1xyXG4gICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHB1YmxpYyBzdG9wTGlzdGVuaW5nKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLnNwZWVjaC5zdG9wTGlzdGVuaW5nKCkudGhlbigoKSA9PiB7XHJcbiAgICAgICAgICB0aGF0LnNldChcImxpc3RlbmluZ1wiLCBmYWxzZSk7XHJcbiAgICAgICAgfSwgKGVycm9yTWVzc2FnZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN0b3AgbGlzdGVuaW5nOiAke2Vycm9yTWVzc2FnZX1gKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHB1YmxpYyByZXF1ZXN0UGVybWlzc2lvbigpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zcGVlY2gucmVxdWVzdFBlcm1pc3Npb24oKS50aGVuKChncmFudGVkOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICBjb25zb2xlLmxvZyhcIkdyYW50ZWQ/IFwiICsgZ3JhbnRlZCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxufVxyXG4iXX0=