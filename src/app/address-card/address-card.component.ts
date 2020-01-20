import { Component, OnInit, Input } from '@angular/core';
import {User} from './user.model';

@Component({
  selector: 'ion-app-address-card',
  templateUrl: './address-card.component.html',
  styleUrls: ['./address-card.component.css']
})
export class AddressCardComponent implements OnInit {

  @Input('user') user: User;
  isCollapsed: boolean = true;

  constructor() {

   }

   toggleCollapsed() {
     this.isCollapsed = !this.isCollapsed;
   }

  ngOnInit() {
    };

    }