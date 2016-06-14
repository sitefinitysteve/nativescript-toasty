import * as observable from 'data/observable';
import * as pages from 'ui/page';
import {Toasty} from './toasty'
import * as frameModule from 'ui/frame';
import * as application from 'application'
import {Color} from 'color';
import {StackLayout} from 'ui/layouts/stack-layout';
import {Label} from 'ui/label';
import {AbsoluteLayout} from 'ui/layouts/absolute-layout';
import {View} from 'ui/core/view';

var page;
let toast : Toasty = null;

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    page = <pages.Page>args.object;
    toast = new Toasty("0");
}

export function onShowToast(args) {
    toast.show("Hey there buddy", 400);
}

export function onShowWeather(args) {
    toast.show("Rain", 400);
}
