import {Component, NgZone, OnInit} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireStorage} from 'angularfire2/storage';
import {UserService} from '../../services/user.service';
import {AuthService} from '../../services/auth.service';
import {FormsModule} from '@angular/forms';
import {Router} from '@angular/router';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  user;

  constructor(private userService: UserService,private authService: AuthService, private dataForm: FormsModule, private router: Router, private ngZone: NgZone) {
    console.log(this.userService);
  }

  ngOnInit() {
    this.userService.user.subscribe(user => this.user = user);
  }

  changeAvatar(event) {
    this.user.avatar = event.target.files[0];
  }

  deleteAvatar() {
    this.user.avatar = "";
  }

  changeData(UserName, UserEmail, Pass) {
    this.user.name = UserName;
    this.user.email = UserEmail;
    if(Pass.length >= 6 && Pass != undefined && Pass != null) {
      this.user.changePass = Pass;
      this.ngZone.run(
        () => this.router.navigate([''])
      )
    }
  }

  deleteUser() {
    this.user.deleteUser();
    this.ngZone.run(
      () => this.router.navigate([''])
    )
  }
}
