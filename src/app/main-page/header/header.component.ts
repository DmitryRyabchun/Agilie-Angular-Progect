import {animate, Component, OnInit, state, style, transition, trigger} from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import * as firebase from 'firebase';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  hideMenu:boolean = true;

  constructor(private cookieService: CookieService, private isReg:AuthService) {
    console.log(isReg);
  }

  ngOnInit() {
  }

}
