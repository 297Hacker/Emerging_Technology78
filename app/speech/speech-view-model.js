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
