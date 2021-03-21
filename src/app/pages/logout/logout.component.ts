import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {
  @ViewChild('myDialogContainer2') myDialogContainerEl2: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  openMyDialog2() {
    this.myDialogContainerEl2.nativeElement.style.display = 'block';
  }
  closeDialog2(e) {
    if(e.target.id === 'dialogContainer2' || e.target.id === 'dialogCloseButton2'){
      this.myDialogContainerEl2.nativeElement.style.display = 'none';
    }
  }

}
