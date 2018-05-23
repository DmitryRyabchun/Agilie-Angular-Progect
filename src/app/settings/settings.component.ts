import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireStorage} from 'angularfire2/storage';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  user

  constructor(private auth: AngularFireAuth, private storage: AngularFireStorage) { }

  ngOnInit() {
    this.auth.authState.subscribe(user => this.user = user);
  }

  changeAvatar(event) {
    const file = event.target.files[0];
    const uploadTask = this.storage.upload(`images/avatar/user_${this.user.email}_avatar.png`, file);
    uploadTask.downloadURL().subscribe(url => this.user.updateProfile({
      displayName: this.user.displayName,
      photoURL: url
    }))
  }

}
