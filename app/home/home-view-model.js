"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var nativescript_speech_recognition_1 = require("nativescript-speech-recognition");
var HomeViewModel = /** @class */ (function (_super) {
    __extends(HomeViewModel, _super);
    function HomeViewModel() {
        var _this = _super.call(this) || this;
        _this.feedback = "Pick a language and say something...";
        _this.listening = false;
        _this.speech = new nativescript_speech_recognition_1.SpeechRecognition();
        return _this;
    }
    HomeViewModel.prototype.startListeningDefault = function () {
        this.startListening();
    };
    HomeViewModel.prototype.startListeningNL = function () {
        this.startListening("nl-NL");
    };
    HomeViewModel.prototype.startListeningEN = function () {
        this.startListening("en-US");
    };
    HomeViewModel.prototype.startListening = function (locale) {
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
    HomeViewModel.prototype.stopListening = function () {
        var that = this;
        this.speech.stopListening().then(function () {
            that.set("listening", false);
        }, function (errorMessage) {
            console.log("Error while trying to stop listening: " + errorMessage);
        });
    };
    HomeViewModel.prototype.requestPermission = function () {
        var that = this;
        this.speech.requestPermission().then(function (granted) {
            console.log("Granted? " + granted);
        });
    };
    return HomeViewModel;
}(observable_1.Observable));
exports.HomeViewModel = HomeViewModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaG9tZS12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTZDO0FBQzdDLG1GQUFtRztBQUVuRztJQUFtQyxpQ0FBVTtJQU16QztRQUFBLFlBQ0ksaUJBQU8sU0FFVjtRQU5NLGNBQVEsR0FBVyxzQ0FBc0MsQ0FBQztRQUMxRCxlQUFTLEdBQVksS0FBSyxDQUFDO1FBSTlCLEtBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxtREFBaUIsRUFBRSxDQUFDOztJQUMxQyxDQUFDO0lBRU0sNkNBQXFCLEdBQTVCO1FBQ0ksSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQ3hCLENBQUM7SUFFTSx3Q0FBZ0IsR0FBdkI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFTSx3Q0FBZ0IsR0FBdkI7UUFDRSxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQy9CLENBQUM7SUFFSSxzQ0FBYyxHQUFyQixVQUFzQixNQUFlO1FBQ2pDLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUVoQixJQUFJLENBQUMsTUFBTSxDQUFDLFNBQVMsRUFBRSxDQUFDLElBQUksQ0FBQyxVQUFDLEtBQWM7WUFDMUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDO2dCQUNYLElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGtDQUFrQyxDQUFDLENBQUM7Z0JBQ3pELE1BQU0sQ0FBQztZQUNULENBQUM7WUFDRCxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FDdEI7Z0JBQ0UsUUFBUSxFQUFFLFVBQUMsYUFBNkM7b0JBQ3RELElBQUksQ0FBQyxHQUFHLENBQUMsVUFBVSxFQUFFLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztvQkFDekMsRUFBRSxDQUFDLENBQUMsYUFBYSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUM7d0JBQzNCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO29CQUMvQixDQUFDO2dCQUNILENBQUM7Z0JBQ0Qsb0JBQW9CLEVBQUUsSUFBSTtnQkFDMUIsTUFBTSxFQUFFLE1BQU07YUFDZixDQUNKLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBZ0I7Z0JBQ3RCLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLElBQUksQ0FBQyxDQUFDO1lBQzlCLENBQUMsRUFBRSxVQUFDLFlBQW9CO2dCQUN0QixPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUEwQyxZQUFjLENBQUMsQ0FBQztZQUN4RSxDQUFDLENBQUMsQ0FBQztRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHFDQUFhLEdBQXBCO1FBQ0UsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1FBQ2hCLElBQUksQ0FBQyxNQUFNLENBQUMsYUFBYSxFQUFFLENBQUMsSUFBSSxDQUFDO1lBQy9CLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLEtBQUssQ0FBQyxDQUFDO1FBQy9CLENBQUMsRUFBRSxVQUFDLFlBQW9CO1lBQ3RCLE9BQU8sQ0FBQyxHQUFHLENBQUMsMkNBQXlDLFlBQWMsQ0FBQyxDQUFDO1FBQ3ZFLENBQUMsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUVNLHlDQUFpQixHQUF4QjtRQUNFLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztRQUNoQixJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUMsT0FBZ0I7WUFDcEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLEdBQUcsT0FBTyxDQUFDLENBQUM7UUFDckMsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ1Asb0JBQUM7QUFBRCxDQUFDLEFBakVELENBQW1DLHVCQUFVLEdBaUU1QztBQWpFWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwiZGF0YS9vYnNlcnZhYmxlXCI7XHJcbmltcG9ydCB7IFNwZWVjaFJlY29nbml0aW9uLCBTcGVlY2hSZWNvZ25pdGlvblRyYW5zY3JpcHRpb259IGZyb20gXCJuYXRpdmVzY3JpcHQtc3BlZWNoLXJlY29nbml0aW9uXCI7XHJcblxyXG5leHBvcnQgY2xhc3MgSG9tZVZpZXdNb2RlbCBleHRlbmRzIE9ic2VydmFibGUge1xyXG5cclxuICAgIHByaXZhdGUgc3BlZWNoOiBTcGVlY2hSZWNvZ25pdGlvbjtcclxuICAgIHB1YmxpYyBmZWVkYmFjazogc3RyaW5nID0gXCJQaWNrIGEgbGFuZ3VhZ2UgYW5kIHNheSBzb21ldGhpbmcuLi5cIjtcclxuICAgIHB1YmxpYyBsaXN0ZW5pbmc6IGJvb2xlYW4gPSBmYWxzZTtcclxuXHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgIHRoaXMuc3BlZWNoID0gbmV3IFNwZWVjaFJlY29nbml0aW9uKCk7XHJcbiAgICB9XHJcblxyXG4gICAgcHVibGljIHN0YXJ0TGlzdGVuaW5nRGVmYXVsdCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKCk7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmdOTCgpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKFwibmwtTkxcIik7XHJcbiAgICAgIH1cclxuICAgIFxyXG4gICAgICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmdFTigpOiB2b2lkIHtcclxuICAgICAgICB0aGlzLnN0YXJ0TGlzdGVuaW5nKFwiZW4tVVNcIik7XHJcbiAgICAgIH1cclxuXHJcbiAgICBwdWJsaWMgc3RhcnRMaXN0ZW5pbmcobG9jYWxlPzogc3RyaW5nKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgXHJcbiAgICAgICAgdGhpcy5zcGVlY2guYXZhaWxhYmxlKCkudGhlbigoYXZhaWw6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIGlmICghYXZhaWwpIHtcclxuICAgICAgICAgICAgdGhhdC5zZXQoXCJmZWVkYmFja1wiLCBcInNwZWVjaCByZWNvZ25pdGlvbiBub3QgYXZhaWxhYmxlXCIpO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgICB0aGF0LnNwZWVjaC5zdGFydExpc3RlbmluZyhcclxuICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBvblJlc3VsdDogKHRyYW5zY3JpcHRpb246IFNwZWVjaFJlY29nbml0aW9uVHJhbnNjcmlwdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICB0aGF0LnNldChcImZlZWRiYWNrXCIsIHRyYW5zY3JpcHRpb24udGV4dCk7XHJcbiAgICAgICAgICAgICAgICAgIGlmICh0cmFuc2NyaXB0aW9uLmZpbmlzaGVkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhhdC5zZXQoXCJsaXN0ZW5pbmdcIiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuUGFydGlhbFJlc3VsdHM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBsb2NhbGU6IGxvY2FsZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICkudGhlbigoc3RhcnRlZDogYm9vbGVhbikgPT4ge1xyXG4gICAgICAgICAgICB0aGF0LnNldChcImxpc3RlbmluZ1wiLCB0cnVlKTtcclxuICAgICAgICAgIH0sIChlcnJvck1lc3NhZ2U6IHN0cmluZykgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhgRXJyb3Igd2hpbGUgdHJ5aW5nIHRvIHN0YXJ0IGxpc3RlbmluZzogJHtlcnJvck1lc3NhZ2V9YCk7XHJcbiAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG5cclxuICAgICAgcHVibGljIHN0b3BMaXN0ZW5pbmcoKTogdm9pZCB7XHJcbiAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgIHRoaXMuc3BlZWNoLnN0b3BMaXN0ZW5pbmcoKS50aGVuKCgpID0+IHtcclxuICAgICAgICAgIHRoYXQuc2V0KFwibGlzdGVuaW5nXCIsIGZhbHNlKTtcclxuICAgICAgICB9LCAoZXJyb3JNZXNzYWdlOiBzdHJpbmcpID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKGBFcnJvciB3aGlsZSB0cnlpbmcgdG8gc3RvcCBsaXN0ZW5pbmc6ICR7ZXJyb3JNZXNzYWdlfWApO1xyXG4gICAgICAgIH0pO1xyXG4gICAgICB9XHJcbiAgICBcclxuICAgICAgcHVibGljIHJlcXVlc3RQZXJtaXNzaW9uKCk6IHZvaWQge1xyXG4gICAgICAgIGxldCB0aGF0ID0gdGhpcztcclxuICAgICAgICB0aGlzLnNwZWVjaC5yZXF1ZXN0UGVybWlzc2lvbigpLnRoZW4oKGdyYW50ZWQ6IGJvb2xlYW4pID0+IHtcclxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiR3JhbnRlZD8gXCIgKyBncmFudGVkKTtcclxuICAgICAgICB9KTtcclxuICAgICAgfVxyXG59XHJcbiJdfQ==