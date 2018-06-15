import { Component, OnInit} from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {HeaderComponent} from '../header.component';

@Component({
  selector: 'app-user-menu',
  templateUrl: './user-menu.component.html',
  styleUrls: ['./user-menu.component.scss'],

})
export class UserMenuComponent implements OnInit {

  isSettings:boolean = false;

  constructor(public auth: AuthService, private hide:HeaderComponent) {}

  ngOnInit() {
  }

  signOut(){
    this.closeMenu();
    this.auth.signOut();
    this.auth.isOpen = false;
  }

  closeMenu() {
    this.hide.hideMenu = !this.hide.hideMenu;
    this.isSettings = true;
  }

}
