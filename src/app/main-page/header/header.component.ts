import {Component, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  hideMenu:boolean = true;

  constructor(public isReg:AuthService, private search: SearchService) {
    console.log(isReg);
  }

  ngOnInit() {
  }

  Hide() {
    this.hideMenu = !this.hideMenu;
    this.search.isList = false;
  }

}
