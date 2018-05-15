import { Observable } from "data/observable";
import { SpeechRecognition, SpeechRecognitionTranscription } from "nativescript-speech-recognition";

export class SpeechViewModel extends Observable {

    private speech: SpeechRecognition;
    public feedback: string = "Pick a language and say something...";
    public listening: boolean = false;
    public testAI;

    constructor() {
        super();
        this.speech = new SpeechRecognition();
    }

    public startListeningDefault(): void {
        this.startListening();
      }
    
      public startListeningNL(): void {
        this.startListening("nl-NL");
      }
    
      public startListeningEN(): void {
        this.startListening("en-US");
      }

    public startListening(locale?: string): void {
        let that = this;
    
        this.speech.available().then((avail: boolean) => {
          if (!avail) {
            that.set("feedback", "speech recognition not available");
            return;
          }
          that.speech.startListening(
              {
                onResult: (transcription: SpeechRecognitionTranscription) => {
                  that.set("feedback", transcription.text);
                  if (transcription.finished) {
                    that.set("listening", false);
                  }
                },
                returnPartialResults: true,
                locale: locale
              }
          ).then((started: boolean) => {
            that.set("listening", true);
          }, (errorMessage: string) => {
            console.log(`Error while trying to start listening: ${errorMessage}`);
          });
        });
      }

      public stopListening(): void {
        let that = this;
        this.speech.stopListening().then(() => {
          that.set("listening", false);
        }, (errorMessage: string) => {
          console.log(`Error while trying to stop listening: ${errorMessage}`);
        });
      }
    
      public requestPermission(): void {
        let that = this;
        this.speech.requestPermission().then((granted: boolean) => {
          console.log("Granted? " + granted);
        });
      }
}
