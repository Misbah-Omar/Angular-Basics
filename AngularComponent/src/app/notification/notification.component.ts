import { Component } from '@angular/core';

@Component({
  selector: 'app-notification',
  template: `<div class="alert alert-success" [hidden]="displayNotification">
              <p>This website uses cookies for better user experience.</p>
            </div>`,
  styles: [".notification-div{margin: 10px 0px; padding: 10px 20px; backgrounf-color: #FAD7A0; text-align: center;}", "p{font-size: 14px;}"]
})
export class NotificationComponent {
  displayNotification: boolean = false;
}
