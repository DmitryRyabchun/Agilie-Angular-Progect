import {Component, Input, OnInit} from '@angular/core';
import {CollectionService} from '../../services/collection.service';
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  IsLoad:boolean = false;
  HeaderList: any[] = [];
  SongsList: any[] = [];
  Data:any;



  constructor(private collection: CollectionService, private user: AuthService) {
    setTimeout(a => {
      this.Data = this.collection.getCollections(this.user.userData.uid);
      console.log(this.Data);
      for(let key in this.Data) {

        for(let key2 in this.Data[key]) {
          this.SongsList.push({id:key2, name:this.Data[key][key2].name, author:this.Data[key][key2].author, img:this.Data[key][key2].img})
        }

        this.HeaderList.push({name:key, songs:this.SongsList});
        this.SongsList = [];
      }
      console.log(this.HeaderList);
      this.IsLoad = true;
    }, 1000);
  }

  ngOnInit() {
  }

  delCollection(album) {
    if(confirm("Do you really want to delete this collection?") == true) {
      this.collection.delCollection(album);
      setTimeout(a => {
        this.HeaderList = [];
        this.Data = this.collection.getCollections(this.user.userData.uid);
        for(let key in this.Data) {
          for(let key2 in this.Data[key]) {
            this.SongsList.push({id:key2, name:this.Data[key][key2].name, author:this.Data[key][key2].author, img:this.Data[key][key2].img})
          }
          this.HeaderList.push({name:key, songs:this.SongsList});
          this.SongsList = [];
        }
      }, 400);
    }
  }

  delSong(song, album) {
    if(confirm("Do you really want to delete this song?") == true) {
      this.collection.delSong(song, album);
      setTimeout(a => {
        this.HeaderList = [];
        this.Data = this.collection.getCollections(this.user.userData.uid);
        for(let key in this.Data) {
          for(let key2 in this.Data[key]) {
            this.SongsList.push({id:key2, name:this.Data[key][key2].name, author:this.Data[key][key2].author, img:this.Data[key][key2].img})
          }
          this.HeaderList.push({name:key, songs:this.SongsList});
          this.SongsList = [];
        }
      }, 1000);
    }
  }

}
