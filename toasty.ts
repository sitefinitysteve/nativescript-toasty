import * as application from 'application';
import * as frameModule from 'ui/frame';
import {Page} from 'ui/page';
import {Label} from 'ui/label';
import {Color} from 'color';
import {AbsoluteLayout} from 'ui/layouts/absolute-layout';

export class Toasty  {
    constructor(marginTop: any = <any>"75%"){
        this._marginTop = marginTop;
    }

    private _marginTop: number;
    private _timeout : number;
    private _toastWidget : AbsoluteLayout = null;

    public show(text: string, duration: number) {
        if(this._toastWidget == null){
            this._toastWidget = new AbsoluteLayout();
            this._toastWidget.opacity = 0;
            this._toastWidget.padding = "10";
            this._toastWidget.borderRadius = 20;
            this._toastWidget.backgroundColor = new Color("#000");
            this._toastWidget.horizontalAlignment = "center";
            this._toastWidget.marginTop = this._marginTop;
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
            debugger;
            page.content.addChild(this._toastWidget);
        }else{
            //Just set the text
            let label = <Label>this._toastWidget.getChildAt(0);
            label.text = text;
        }

        if(this._timeout)
            clearTimeout(this._timeout);

        var timeout = this._timeout;
        var t = this._toastWidget;
        this._toastWidget.animate({
            opacity: 0.5,
            duration: 200
        }).then(x => {
            timeout = setTimeout(function() {
                t.animate({
                    opacity: 0,
                    duration: duration
                });
            }, 2000);
        });
    }
}
