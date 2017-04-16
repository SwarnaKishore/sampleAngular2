import { Component } from '@angular/core';
import { User } from './models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 users : User[] = [
        { id : 1, name : 'Mike Wonderful' , username : 'Mike' },
        { id : 2, name : 'hercules bearnaise', username : 'hercules' },
        { id : 3, name : 'zenith catcher', username : ' Zenith' },
        {id : 4, name : 'test', username: 'testUser'}
         ];

activeUser: User;

selectUser(user) {
    this.activeUser = user;
  }

  onUserCreated(event) {
    this.users.push(event.user);
  }

}
