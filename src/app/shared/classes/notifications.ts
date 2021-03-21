import { Injectable, Renderer2, RendererFactory2 } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class Notification {
    private renderer: Renderer2;
    container: HTMLElement;
    successID:number = 0;
    errorID:number = 0;

    constructor(rendererFactory: RendererFactory2) {
        this.renderer = rendererFactory.createRenderer(null, null);
    }

    createContaner(vPosition, hPosition) {
        this.container = this.renderer.createElement('div');
        this.renderer.setAttribute(this.container, 'id', 'container');
        this.renderer.setStyle(this.container, 'display', 'flex');
        this.renderer.setStyle(this.container, 'flex-direction', 'column');
        this.renderer.setStyle(this.container, 'position', 'fixed');
        this.renderer.setStyle(this.container, vPosition, '20px');
        this.renderer.setStyle(this.container, hPosition, '40px');
        this.renderer.setStyle(this.container, 'color', 'white');
        document.body.appendChild(this.container);
    }

    openSuccessNotification(message, perod, hPosition, vPosition) {
        let id = this.successID + '';
        this.createContaner(vPosition, hPosition);
        const notification = this.renderer.createElement('div');
        this.renderer.setStyle(notification, 'background-color', 'rgb(56, 153, 56)');
        this.renderer.setStyle(notification, 'padding', '10px');
        this.renderer.setStyle(notification, 'min-width', '100px');
        this.renderer.setStyle(notification, 'text-align', 'center');
        this.renderer.setStyle(notification, 'border', '1px solid black');
        this.renderer.setStyle(notification, 'border-radius', '5px');
        this.renderer.setStyle(notification, 'z-index', '1000');
        this.renderer.setStyle(notification, 'margin-top', '5px');
        this.renderer.setProperty(notification, 'innerText', message)
        this.renderer.setAttribute(notification, 'id', id);
        this.successID++;
        document.getElementById('container').appendChild(notification);
        this.renderer.listen(notification, 'click', () => {
            document.getElementById('container').removeChild(notification);
            this.successID--;
          })
        setTimeout(() => {
            if(document.getElementById(id)) {
                document.getElementById('container').removeChild(notification)
            }
        }, perod);
      }
      

      openErrorNotification(message, perod, hPosition, vPosition) {
          let id = this.errorID + '';
        this.createContaner(vPosition, hPosition);
        const notification = this.renderer.createElement('div');
        this.renderer.setStyle(notification, 'background-color', 'rgb(221, 80, 61)');
        this.renderer.setStyle(notification, 'padding', '10px');
        this.renderer.setStyle(notification, 'min-width', '100px');
        this.renderer.setStyle(notification, 'text-align', 'center');
        this.renderer.setStyle(notification, 'border', '1px solid black');
        this.renderer.setStyle(notification, 'border-radius', '5px');
        this.renderer.setStyle(notification, 'z-index', '1000');
        this.renderer.setStyle(notification, 'margin-top', '5px');
        this.renderer.setProperty(notification, 'innerText', message)
        this.renderer.setAttribute(notification, 'id', id);
        this.errorID++;
        document.getElementById('container').appendChild(notification);
        this.renderer.listen(notification, 'click', () => {
            document.getElementById('container').removeChild(notification);
            this.errorID--;
          })
        setTimeout(() => {
            if(document.getElementById(id)) {
                document.getElementById('container').removeChild(notification)
            }
        }, perod);
      }
    
}