import {Component, OnInit} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Observable} from 'rxjs/Observable';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

<<<<<<< HEAD
  isOpen:boolean = false;

=======
>>>>>>> 744881fe28c817c26761ee0177e724f928f4b385
  messages: Observable<any[]>;
  user: firebase.User;

  constructor(private db: AngularFireDatabase,
              private auth: AngularFireAuth) {
  }

  ngOnInit() {
    this.messages = this.db.list('/messages').valueChanges();
    this.auth.authState.subscribe(user => this.user = user);
  }

<<<<<<< HEAD
  sendMessage(message) {
    if (message.value != "") {
      this.db.list('/messages').push({
        message: message.value,
        user: {
          name: this.user.displayName,
          email: this.user.email,
          avatar: this.user.photoURL
        }
      }).then(() => message.value = '',
        (error) => alert(error));
    }
=======

  sendMessage(message) {
    this.db.list('/messages').push({
      message: message.value,
      user: {
        name: this.user.displayName,
        email: this.user.email,
        avatar: this.user.photoURL
      }
    }).then(() => message.value = '',
      (error) => alert(error));
>>>>>>> 744881fe28c817c26761ee0177e724f928f4b385
  }

}

