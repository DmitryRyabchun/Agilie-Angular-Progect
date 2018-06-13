import {Injectable, Injector} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {AngularFireStorage} from 'angularfire2/storage';
import {map} from 'rxjs/operators';

<<<<<<< HEAD

=======
>>>>>>> 744881fe28c817c26761ee0177e724f928f4b385
@Injectable()
export class UserService {

  constructor(private auth: AngularFireAuth, private injector: Injector) {

  }

  get user() {
    return this.auth.authState.pipe(map(event => {
      return new User(event, this.injector);
    }) );
  }

}

class User {

  fireUser: firebase.User;

  constructor(userData: firebase.User, private injector: Injector) {
    this.fireUser = userData;
<<<<<<< HEAD
    console.log(this.fireUser);
=======
>>>>>>> 744881fe28c817c26761ee0177e724f928f4b385
  }

  get avatar() {
    return this.fireUser.photoURL;
  }

  set avatar(avatar) {
    if (typeof avatar === 'string') {
      this.fireUser.updateProfile({
        displayName: this.fireUser.displayName,
        photoURL: avatar
      });
<<<<<<< HEAD
    }
    else {
      const uploadTask = this.injector.get(AngularFireStorage).upload(`user_${this.fireUser.email}_avatar.png`, avatar);
=======
    } else {
      const uploadTask = this.injector.get(AngularFireStorage)
        .upload(`user_${this.fireUser.email}_avatar.png`, avatar);
>>>>>>> 744881fe28c817c26761ee0177e724f928f4b385
      uploadTask.downloadURL().subscribe(url => {
        this.fireUser.updateProfile({
          displayName: this.fireUser.displayName,
          photoURL: url
        });
      });
    }
  }

<<<<<<< HEAD
  get name() {
    return this.fireUser.displayName;
  }

  set name(name) {
    if (typeof name === 'string' || name != '' || name != undefined || name != null) {
      this.fireUser.updateProfile({
        displayName: name,
        photoURL: this.fireUser.photoURL
      });
    }
  }

  get email() {
    return this.fireUser.email;
  }

  set email(email) {
    if(typeof name === 'string' || name != '' || name != undefined || name != null) {
      this.fireUser.updateEmail(email);
    }
  }

  set changePass(Pass) {
      this.fireUser.updatePassword(Pass);
  }

  deleteUser() {
    this.fireUser.delete();
  }

=======
>>>>>>> 744881fe28c817c26761ee0177e724f928f4b385
}
