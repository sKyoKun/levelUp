
import { Component } from '@angular/core';

import { User, UserInterface } from './models/user.model';
import { UsersService } from './services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'levelUp';

  public user : User;

  constructor(private userService : UsersService) {
    this.retrieveUser(1);
  }

  public retrieveUser(userId: number): User {
    if (!this.user) {
      this.userService.getUser(userId).subscribe(res => {
        this.user = res;
      });
    }

    return this.user;
  }

  public sendJoke(data) {
    console.log(data);
    alert('Mr et Mme bonhomme de neige sont en froid');
  }
}
