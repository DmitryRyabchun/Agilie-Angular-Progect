import {Injectable, NgZone,} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase';
import {Router} from '@angular/router';

@Injectable()
export class AuthService {

  isReg:boolean = false;
  userData = {
    name: '',
    email: '',
    photoURL: '',
    uid: ''
  }

  constructor(private firebaseAuth: AngularFireAuth, private router: Router, private ngZone: NgZone) {

    firebaseAuth.authState.subscribe (auth => {
      if (auth) {
        this.isReg = true;
        this.userData.name = auth.displayName;
        this.userData.email = auth.email;
        this.userData.photoURL = auth.photoURL;
        this.userData.uid = auth.uid;
      } else {
        this.isReg = false;
      }
    });
  }

  facebookSignIn() {
    this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.FacebookAuthProvider()
    ).then(() => this.ngZone.run(
      () => this.router.navigate([''])
    ));
  }

  googleSignIn() {
    this.firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider
    ).then(() => this.ngZone.run(
      () => this.router.navigate([''])
    ));
    this.ngZone.run(
      () => this.router.navigate([''])
    )
  }

  emailSignIn(email, password) {
    this.firebaseAuth.auth.signInWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['']));
  }

  emailSignUp(email, password) {
    this.firebaseAuth.auth.createUserWithEmailAndPassword(email, password)
      .then(() => this.router.navigate(['auth']));
  }


  signOut() {
    this.firebaseAuth.auth.signOut().then(() => this.router.navigate(['']));
  }
}
