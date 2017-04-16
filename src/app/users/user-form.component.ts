import { Component, Output, EventEmitter } from '@angular/core';
import { User } from '../models/user';

@Component({
    selector : 'user-form',
    styles: [`
    form   {
      padding: 10px;
      background: #ECF0F1;
      border-radius: 3px;
      margin-bottom: 30px;
    }
  `],
  templateUrl : './user-form.component.html'

})

export class UserFormComponent {
  @Output() userCreated = new EventEmitter();
  newUser: User = new User();
  active: boolean = true;

  onSubmit() {
    // show the event that the user was created
    this.userCreated.emit({ user: this.newUser });
    //clear the form and set active state to false so that the form is refreshed and hs-error values are not shown
    this.newUser = new User();
    this.active = false;
    setTimeout(() => this.active = true, 0);
  }
}