import * as observable from "tns-core-modules/data/observable";
import * as pages from "tns-core-modules/ui/page";
import { CameraViewModel } from "./camera-view-model";

export function pageLoaded(args: observable.EventData) {
    // This function will be executed when the page is loaded

}

export function onNavigatingTo(args: observable.EventData) {
    let page = <pages.Page>args.object;
    page.bindingContext = new CameraViewModel();
}
