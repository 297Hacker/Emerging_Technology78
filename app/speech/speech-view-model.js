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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVlY2gtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QyxtRkFBb0c7QUFFcEc7SUFBcUMsbUNBQVU7SUFPM0M7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFQTSxjQUFRLEdBQVcsc0NBQXNDLENBQUM7UUFDMUQsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUs5QixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksbURBQWlCLEVBQUUsQ0FBQzs7SUFDMUMsQ0FBQztJQUVNLCtDQUFxQixHQUE1QjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sMENBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sMENBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUksd0NBQWMsR0FBckIsVUFBc0IsTUFBZTtRQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFjO1lBQzFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNLENBQUM7WUFDVCxDQUFDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQ3RCO2dCQUNFLFFBQVEsRUFBRSxVQUFDLGFBQTZDO29CQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDL0IsQ0FBQztnQkFDSCxDQUFDO2dCQUNELG9CQUFvQixFQUFFLElBQUk7Z0JBQzFCLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FDSixDQUFDLElBQUksQ0FBQyxVQUFDLE9BQWdCO2dCQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM5QixDQUFDLEVBQUUsVUFBQyxZQUFvQjtnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBMEMsWUFBYyxDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSx1Q0FBYSxHQUFwQjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUUsVUFBQyxZQUFvQjtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUF5QyxZQUFjLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSwyQ0FBaUIsR0FBeEI7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQWdCO1lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNQLHNCQUFDO0FBQUQsQ0FBQyxBQWxFRCxDQUFxQyx1QkFBVSxHQWtFOUM7QUFsRVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTcGVlY2hSZWNvZ25pdGlvbiwgU3BlZWNoUmVjb2duaXRpb25UcmFuc2NyaXB0aW9uIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1zcGVlY2gtcmVjb2duaXRpb25cIjtcclxuXHJcbmV4cG9ydCBjbGFzcyBTcGVlY2hWaWV3TW9kZWwgZXh0ZW5kcyBPYnNlcnZhYmxlIHtcclxuXHJcbiAgICBwcml2YXRlIHNwZWVjaDogU3BlZWNoUmVjb2duaXRpb247XHJcbiAgICBwdWJsaWMgZmVlZGJhY2s6IHN0cmluZyA9IFwiUGljayBhIGxhbmd1YWdlIGFuZCBzYXkgc29tZXRoaW5nLi4uXCI7XHJcbiAgICBwdWJsaWMgbGlzdGVuaW5nOiBib29sZWFuID0gZmFsc2U7XHJcbiAgICBwdWJsaWMgdGVzdEFJO1xyXG5cclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgdGhpcy5zcGVlY2ggPSBuZXcgU3BlZWNoUmVjb2duaXRpb24oKTtcclxuICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmdEZWZhdWx0KCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHB1YmxpYyBzdGFydExpc3RlbmluZ05MKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoXCJubC1OTFwiKTtcclxuICAgICAgfVxyXG4gICAgXHJcbiAgICAgIHB1YmxpYyBzdGFydExpc3RlbmluZ0VOKCk6IHZvaWQge1xyXG4gICAgICAgIHRoaXMuc3RhcnRMaXN0ZW5pbmcoXCJlbi1VU1wiKTtcclxuICAgICAgfVxyXG5cclxuICAgIHB1YmxpYyBzdGFydExpc3RlbmluZyhsb2NhbGU/OiBzdHJpbmcpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICBcclxuICAgICAgICB0aGlzLnNwZWVjaC5hdmFpbGFibGUoKS50aGVuKChhdmFpbDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgaWYgKCFhdmFpbCkge1xyXG4gICAgICAgICAgICB0aGF0LnNldChcImZlZWRiYWNrXCIsIFwic3BlZWNoIHJlY29nbml0aW9uIG5vdCBhdmFpbGFibGVcIik7XHJcbiAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgIH1cclxuICAgICAgICAgIHRoYXQuc3BlZWNoLnN0YXJ0TGlzdGVuaW5nKFxyXG4gICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG9uUmVzdWx0OiAodHJhbnNjcmlwdGlvbjogU3BlZWNoUmVjb2duaXRpb25UcmFuc2NyaXB0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgIHRoYXQuc2V0KFwiZmVlZGJhY2tcIiwgdHJhbnNjcmlwdGlvbi50ZXh0KTtcclxuICAgICAgICAgICAgICAgICAgaWYgKHRyYW5zY3JpcHRpb24uZmluaXNoZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGF0LnNldChcImxpc3RlbmluZ1wiLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICByZXR1cm5QYXJ0aWFsUmVzdWx0czogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxvY2FsZTogbG9jYWxlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgKS50aGVuKChzdGFydGVkOiBib29sZWFuKSA9PiB7XHJcbiAgICAgICAgICAgIHRoYXQuc2V0KFwibGlzdGVuaW5nXCIsIHRydWUpO1xyXG4gICAgICAgICAgfSwgKGVycm9yTWVzc2FnZTogc3RyaW5nKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciB3aGlsZSB0cnlpbmcgdG8gc3RhcnQgbGlzdGVuaW5nOiAke2Vycm9yTWVzc2FnZX1gKTtcclxuICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcblxyXG4gICAgICBwdWJsaWMgc3RvcExpc3RlbmluZygpOiB2b2lkIHtcclxuICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgdGhpcy5zcGVlY2guc3RvcExpc3RlbmluZygpLnRoZW4oKCkgPT4ge1xyXG4gICAgICAgICAgdGhhdC5zZXQoXCJsaXN0ZW5pbmdcIiwgZmFsc2UpO1xyXG4gICAgICAgIH0sIChlcnJvck1lc3NhZ2U6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coYEVycm9yIHdoaWxlIHRyeWluZyB0byBzdG9wIGxpc3RlbmluZzogJHtlcnJvck1lc3NhZ2V9YCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBwdWJsaWMgcmVxdWVzdFBlcm1pc3Npb24oKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3BlZWNoLnJlcXVlc3RQZXJtaXNzaW9uKCkudGhlbigoZ3JhbnRlZDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgY29uc29sZS5sb2coXCJHcmFudGVkPyBcIiArIGdyYW50ZWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbn1cclxuIl19