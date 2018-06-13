import {Injectable} from '@angular/core';
import {AngularFireAuth} from 'angularfire2/auth';
import {AngularFireDatabase} from 'angularfire2/database';
import {Observable} from 'rxjs/Observable';
import * as firebase from 'firebase';
import {AuthService} from './auth.service';

@Injectable()
export class CollectionService {

  collections: Observable<any[]>;
  colletionData: any = [];

  constructor(private db: AngularFireDatabase, private auth: AngularFireAuth, private user: AuthService) {
    this.collections = this.db.list('/collections').valueChanges();
    this.collections.subscribe(data => {
      this.colletionData = data;
      console.log(this.colletionData);
    });
  }

  getCollections() {
    return this.colletionData[0];
  }

  ngOnInit() {

  }

  addSong(album, img, author, name) {
      this.db.list('/collections/'+this.user.userData.uid+"/"+album).push({
          img: img,
          name: name,
          author: author
      });
  }

  // delSong() {
  //   this.db.list('/collections/'+this.user.uid).remove();
  // }

  updateCollection() {

  }

  delCollection(album) {
    this.db.list('/collections/'+this.user.userData.uid+"/"+album).remove();
  }

  getCollection() {

  }


}
