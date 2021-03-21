import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MyDialog } from './shared/classes/myDialog';
import { Notification } from './shared/classes/notifications';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'myCustomModal';
  @ViewChild('myDialogContainer') myDialogContainerEl: ElementRef;

  constructor(private notification: Notification,
              // private myDialog: MyDialog
              ) { }

    notification1() {
      this.notification.openSuccessNotification('success', 3000, 'right', 'top')
    }
    notification2() {
      this.notification.openErrorNotification('error', 3000, 'right', 'top')
    }

    // openMyDialogRenderer() {
    //   this.myDialog.openMyDialog()
    // }

    openMyDialog() {
      this.myDialogContainerEl.nativeElement.style.display = 'block';
    }
    closeDialog(e) {
      if(e.target.id === 'dialogContainer' || e.target.id === 'dialogCloseButton'){
        this.myDialogContainerEl.nativeElement.style.display = 'none';
      }
    }
    

}
