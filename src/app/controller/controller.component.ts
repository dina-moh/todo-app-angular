import { Component } from '@angular/core';

@Component({
  selector: 'app-controller',
  templateUrl: './controller.component.html',
  styleUrls: ['./controller.component.css']
})
export class ControllerComponent {

  userID:any;
  updateUserId(selectedUserId:any)
  {
    this.userID = selectedUserId;
  }

}
