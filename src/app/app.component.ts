import { Component } from '@angular/core';
import { User } from './address-card/user.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  user: User;
  constructor() {
    this.user = new User();
    this.user.name = "Luis";
    this.user.title = "Ex director";
    this.user.address= "Novus";
    this.user.phone = ['5435333','3453453'];
   }
}
