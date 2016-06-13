import * as application from 'application';
import * as frameModule from 'ui/frame';
import {Page} from 'ui/page';
import {Label} from 'ui/label';
import {Color} from 'color';
import {AbsoluteLayout} from 'ui/layouts/absolute-layout';

export class Toasty  {
    constructor(){

    }

    private _timeout : number;
    private _toastWidget : AbsoluteLayout = null;

    public show(text: string, duration: number) {
            if(this._toastWidget == null){
                this._toastWidget = new AbsoluteLayout();
                this._toastWidget.opacity = 0;
                this._toastWidget.padding = "10";
                this._toastWidget.borderRadius = 10;
                this._toastWidget.backgroundColor = new Color("#000");
                this._toastWidget.horizontalAlignment = "center";
                this._toastWidget.marginTop = <any>"80%";
                this._toastWidget.className = "toast-wrapper";

                AbsoluteLayout.setLeft(this._toastWidget, 0);
                AbsoluteLayout.setTop(this._toastWidget, 0);

                var label = new Label();
                label.className = "toast-text";
                label.text = text;
                label.color = new Color("#FFF");
                label.textWrap = true;
                label.textAlignment = "center";
                label.marginRight = 10;
                label.marginLeft = 10;

                this._toastWidget.addChild(label);

                var page = <any>frameModule.topmost().currentPage;
                page.content.addChild(this._toastWidget);
            }


            this._toastWidget.animate({
                opacity: 0.7,
                duration: 200
            });

            var t = this._toastWidget;
            var timeout = setTimeout(function() {
                t.animate({
                    opacity: 0,
                    duration: 2000
                });
            }, 2000);
    }
}
