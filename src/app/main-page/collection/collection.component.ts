import {Component, Input, OnInit} from '@angular/core';
import {CollectionService} from '../../services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  IsLoad:boolean = false;
  HeaderList: any[] = [];
  AlbumName:string = "";
  AlbumList: {name:string}[];
  //   name: "",
  //   // songs: [{
  //   //   id: "",
  //   //   name: "",
  //   //   artist: "",
  //   //   photoUrl: ""
  //   // }]
  // }
  Data:any;



  constructor(private collection: CollectionService) {
    setTimeout(a => {
      this.Data = this.collection.getCollections();
      console.log(this.Data);
      for(let key in this.Data) {
        this.HeaderList.push(key);
        // console.log(key);
        // var i = 0;
        // for(let key2 in this.Data[key]) {
        //   console.log(this.Data[key][key2].author);
        // }
      }
      console.log(this.HeaderList);
      this.IsLoad = true;
    }, 1000);
  }

  ngOnInit() {
  }



}
