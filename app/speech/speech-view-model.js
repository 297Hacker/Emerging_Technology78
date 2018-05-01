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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3BlZWNoLXZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJzcGVlY2gtdmlldy1tb2RlbC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDhDQUE2QztBQUM3QyxtRkFBbUc7QUFFbkc7SUFBcUMsbUNBQVU7SUFNM0M7UUFBQSxZQUNJLGlCQUFPLFNBRVY7UUFOTSxjQUFRLEdBQVcsc0NBQXNDLENBQUM7UUFDMUQsZUFBUyxHQUFZLEtBQUssQ0FBQztRQUk5QixLQUFJLENBQUMsTUFBTSxHQUFHLElBQUksbURBQWlCLEVBQUUsQ0FBQzs7SUFDMUMsQ0FBQztJQUVNLCtDQUFxQixHQUE1QjtRQUNJLElBQUksQ0FBQyxjQUFjLEVBQUUsQ0FBQztJQUN4QixDQUFDO0lBRU0sMENBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRU0sMENBQWdCLEdBQXZCO1FBQ0UsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztJQUMvQixDQUFDO0lBRUksd0NBQWMsR0FBckIsVUFBc0IsTUFBZTtRQUNqQyxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFFaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxLQUFjO1lBQzFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQztnQkFDWCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxrQ0FBa0MsQ0FBQyxDQUFDO2dCQUN6RCxNQUFNLENBQUM7WUFDVCxDQUFDO1lBQ0QsSUFBSSxDQUFDLE1BQU0sQ0FBQyxjQUFjLENBQ3RCO2dCQUNFLFFBQVEsRUFBRSxVQUFDLGFBQTZDO29CQUN0RCxJQUFJLENBQUMsR0FBRyxDQUFDLFVBQVUsRUFBRSxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7b0JBQ3pDLEVBQUUsQ0FBQyxDQUFDLGFBQWEsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO3dCQUMzQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztvQkFDL0IsQ0FBQztnQkFDSCxDQUFDO2dCQUNELG9CQUFvQixFQUFFLElBQUk7Z0JBQzFCLE1BQU0sRUFBRSxNQUFNO2FBQ2YsQ0FDSixDQUFDLElBQUksQ0FBQyxVQUFDLE9BQWdCO2dCQUN0QixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztZQUM5QixDQUFDLEVBQUUsVUFBQyxZQUFvQjtnQkFDdEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBMEMsWUFBYyxDQUFDLENBQUM7WUFDeEUsQ0FBQyxDQUFDLENBQUM7UUFDTCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSx1Q0FBYSxHQUFwQjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLGFBQWEsRUFBRSxDQUFDLElBQUksQ0FBQztZQUMvQixJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsRUFBRSxLQUFLLENBQUMsQ0FBQztRQUMvQixDQUFDLEVBQUUsVUFBQyxZQUFvQjtZQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLDJDQUF5QyxZQUFjLENBQUMsQ0FBQztRQUN2RSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFTSwyQ0FBaUIsR0FBeEI7UUFDRSxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7UUFDaEIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLE9BQWdCO1lBQ3BELE9BQU8sQ0FBQyxHQUFHLENBQUMsV0FBVyxHQUFHLE9BQU8sQ0FBQyxDQUFDO1FBQ3JDLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNQLHNCQUFDO0FBQUQsQ0FBQyxBQWpFRCxDQUFxQyx1QkFBVSxHQWlFOUM7QUFqRVksMENBQWUiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBPYnNlcnZhYmxlIH0gZnJvbSBcImRhdGEvb2JzZXJ2YWJsZVwiO1xyXG5pbXBvcnQgeyBTcGVlY2hSZWNvZ25pdGlvbiwgU3BlZWNoUmVjb2duaXRpb25UcmFuc2NyaXB0aW9ufSBmcm9tIFwibmF0aXZlc2NyaXB0LXNwZWVjaC1yZWNvZ25pdGlvblwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFNwZWVjaFZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG5cclxuICAgIHByaXZhdGUgc3BlZWNoOiBTcGVlY2hSZWNvZ25pdGlvbjtcclxuICAgIHB1YmxpYyBmZWVkYmFjazogc3RyaW5nID0gXCJQaWNrIGEgbGFuZ3VhZ2UgYW5kIHNheSBzb21ldGhpbmcuLi5cIjtcclxuICAgIHB1YmxpYyBsaXN0ZW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3BlZWNoID0gbmV3IFNwZWVjaFJlY29nbml0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0TGlzdGVuaW5nRGVmYXVsdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmdOTCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKFwibmwtTkxcIik7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmdFTigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKFwiZW4tVVNcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmcobG9jYWxlPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5zcGVlY2guYXZhaWxhYmxlKCkudGhlbigoYXZhaWw6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIGlmICghYXZhaWwpIHtcclxuICAgICAgICAgICAgdGhhdC5zZXQoXCJmZWVkYmFja1wiLCBcInNwZWVjaCByZWNvZ25pdGlvbiBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGF0LnNwZWVjaC5zdGFydExpc3RlbmluZyhcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvblJlc3VsdDogKHRyYW5zY3JpcHRpb246IFNwZWVjaFJlY29nbml0aW9uVHJhbnNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGF0LnNldChcImZlZWRiYWNrXCIsIHRyYW5zY3JpcHRpb24udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2NyaXB0aW9uLmZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXQoXCJsaXN0ZW5pbmdcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuUGFydGlhbFJlc3VsdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGxvY2FsZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICkudGhlbigoc3RhcnRlZDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICB0aGF0LnNldChcImxpc3RlbmluZ1wiLCB0cnVlKTtcclxuICAgICAgICAgIH0sIChlcnJvck1lc3NhZ2U6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN0YXJ0IGxpc3RlbmluZzogJHtlcnJvck1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIHN0b3BMaXN0ZW5pbmcoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3BlZWNoLnN0b3BMaXN0ZW5pbmcoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoYXQuc2V0KFwibGlzdGVuaW5nXCIsIGZhbHNlKTtcclxuICAgICAgICB9LCAoZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciB3aGlsZSB0cnlpbmcgdG8gc3RvcCBsaXN0ZW5pbmc6ICR7ZXJyb3JNZXNzYWdlfWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgcHVibGljIHJlcXVlc3RQZXJtaXNzaW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLnNwZWVjaC5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKGdyYW50ZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiR3JhbnRlZD8gXCIgKyBncmFudGVkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG59XHJcbiJdfQ==