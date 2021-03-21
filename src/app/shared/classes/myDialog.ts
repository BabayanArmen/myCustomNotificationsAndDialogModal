import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class MyDialog {
    private renderer: Renderer2;

    constructor(rendererFactory: RendererFactory2, private router:Router) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    openMyDialog() {
        const dialog = this.renderer.createElement('div');
        this.renderer.setStyle(dialog, 'display', 'flex');
        this.renderer.setStyle(dialog, 'flex-direction', 'column');
        this.renderer.setStyle(dialog, 'width', '600px');
        this.renderer.setStyle(dialog, 'height', '400px');
        this.renderer.setStyle(dialog, 'border', '1px solid grey');
        this.renderer.setStyle(dialog, 'margin', '50px auto');
        this.renderer.setStyle(dialog, 'border-radius', '5px');
        document.body.appendChild(dialog);

        const header = this.renderer.createElement('div');
        this.renderer.setStyle(header, 'width', '100%');
        this.renderer.setStyle(header, 'height', '50px');
        this.renderer.setStyle(header, 'line-height', '50px');
        this.renderer.setStyle(header, 'border-bottom', '1px solid grey');
        this.renderer.setStyle(header, 'text-align', 'center');
        dialog.appendChild(header);

        const title = this.renderer.createElement('span');
        this.renderer.setStyle(title, 'width', '100%');
        this.renderer.setProperty(title, 'innerText', 'title');
        this.renderer.setStyle(title, 'padding', '2%');
        header.appendChild(title);

        const close = this.renderer.createElement('span');
        this.renderer.setProperty(close, 'innerHTML', '&#10005;');
        this.renderer.setStyle(close, 'float', 'right');
        this.renderer.setStyle(close, 'padding-right', '2%');
        this.renderer.setStyle(close, 'cursor', 'pointer');
        this.renderer.listen(close, 'click', () => {
          document.body.removeChild(dialog);
        })
        header.appendChild(close);

        const content = this.renderer.createElement('div');
        this.renderer.setStyle(content, 'height', '100%');
        this.renderer.setStyle(content, 'text-align', 'center');

        const p = this.renderer.createElement('p')
        this.renderer.setProperty(p, 'innerText', 'Log Out?');
        content.appendChild(p);

        const noButton = this.renderer.createElement('button');
        this.renderer.setProperty(noButton, 'innerText', 'No');
        this.renderer.listen(noButton, 'click', () => {
            document.body.removeChild(dialog);
          })
        content.appendChild(noButton);

        const yesButton = this.renderer.createElement('button');
        this.renderer.setProperty(yesButton, 'innerText', 'Yes');
        this.renderer.listen(yesButton, 'click', () => {
            this.router.navigateByUrl('/');
            document.body.removeChild(dialog);
          })
        content.appendChild(yesButton);

        dialog.appendChild(content);
    }

}