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
    TextViewModel.prototype.stop = function () {
        this.textToSpeech.pause();
    };
    TextViewModel.prototype.clearText = function () {
        this.textToSpeech.pause();
        this.set("speakText", "");
    };
    return TextViewModel;
}(observable_1.Observable));
exports.TextViewModel = TextViewModel;
