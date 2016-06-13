import * as observable from 'data/observable';
import * as pages from 'ui/page';
import {Toasty} from 'nativescript-toasty/toasty'

import * as application from 'application'
import {Color} from 'color';
import {StackLayout} from 'ui/layouts/stack-layout';
import {Label} from 'ui/label';
import {AbsoluteLayout} from 'ui/layouts/absolute-layout';
import {View} from 'ui/core/view';

var page;

// Event handler for Page "loaded" event attached in main-page.xml
export function pageLoaded(args: observable.EventData) {
    // Get the event sender
    page = <pages.Page>args.object;
}


var timeout;
let toastWidget : AbsoluteLayout = null;


export function onShowToast(args) {
    var toast = new Toasty();
    toast.show("Hey there buddy", 400);
    /*
    if(toastWidget == null){
        toastWidget = new AbsoluteLayout();
        toastWidget.opacity = 0;
        toastWidget.padding = "10";
        toastWidget.borderRadius = 10;
        toastWidget.backgroundColor = new Color("#000");
        toastWidget.horizontalAlignment = "center";
        toastWidget.marginTop = <any>"80%";
        toastWidget.className = "toast-wrapper";

        AbsoluteLayout.setLeft(toastWidget, 0);
        AbsoluteLayout.setTop(toastWidget, 0);

        var label = new Label();
        label.className = "toast-text";
        label.text = "Some action happened";
        label.color = new Color("#FFF");
        label.textWrap = true;
        label.textAlignment = "center";
        label.marginRight = 10;
        label.marginLeft = 10;

        toastWidget.addChild(label);

        page.content.addChild(toastWidget);
    }


    toastWidget.animate({
        opacity: 0.7,
        duration: 200
    });

    timeout = setTimeout(function() {
        toastWidget.animate({
            opacity: 0,
            duration: 2000
        });
    }, 2000);
    */
}
