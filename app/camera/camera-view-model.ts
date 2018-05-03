import { Observable } from "data/observable";
import { takePicture, requestPermissions, CameraOptions } from "nativescript-camera";
import * as imageSourceModule from "tns-core-modules/image-source";
import { ImageAsset } from "tns-core-modules/image-asset/image-asset";
import * as appModule from "tns-core-modules/application";
import { layout } from "tns-core-modules/utils/utils";
import * as trace from "tns-core-modules/trace";

export class CameraViewModel extends Observable {

    public cameraImage: string;
    public saveToGallery: boolean;
    private options: CameraOptions;

    constructor() {
        super();
        this.saveToGallery = false;
        this.cameraImage = "~/images/empty.jpg";
        this.options = {width: 300, height: 300, keepAspectRatio: true, saveToGallery: this.saveToGallery};
    }

    onTakePictureTap() {
        requestPermissions().then(
            () => {
                takePicture({ width: 300, height: 300, keepAspectRatio: true, saveToGallery: this.saveToGallery}).
                    then((imageAsset) => {
                        this.set("cameraImage", imageAsset.android);
                        // This where Tensorflow should come in and create a label for the image

                    },
                    (err) => {
                        console.log("Error -> " + err.message);
                    });
            },
            () => alert("permissions rejected")
        );
    }

    private setCameraFacing(facing: boolean): string {
        if (facing) {return "rear"; } else {
            return "front";
        }
    }
}
