import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../services/auth.service';
import {AngularFireAuth} from 'angularfire2/auth';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-auth-user',
  templateUrl: './auth-user.component.html',
  styleUrls: ['./auth-user.component.scss']
})
export class AuthUserComponent implements OnInit {

  user;

  constructor(private firebaseAuth: AngularFireAuth, private isReg:AuthService,  private userService: UserService) {
    this.firebaseAuth.authState.subscribe(auth => {console.log(auth)});
  }

  ngOnInit() {
    this.userService.user.subscribe(user => this.user = user);
  }

}
