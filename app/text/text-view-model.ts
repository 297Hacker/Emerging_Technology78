import { Observable } from "data/observable";
import { TNSTextToSpeech, SpeakOptions } from "nativescript-texttospeech";

export class TextViewModel extends Observable {

    public speakText: string;
    private options: SpeakOptions;
    private textToSpeech: TNSTextToSpeech;

    constructor() {
        super();
        this.speakText = "";
        this.textToSpeech = new TNSTextToSpeech();
        this.options = {
            text: this.speakText,
            speakRate: 0.5,
            pitch: 1.0,
            volume: 1.0,
            locale: "NL-NL"
        };
    }

    speak() {
        this.options.text = this.speakText;
        this.textToSpeech.speak(this.options);
    }

    stop() {
        this.textToSpeech.pause();
    }

    clearText() {
        this.textToSpeech.pause();
        this.set("speakText", "");
    }
}
