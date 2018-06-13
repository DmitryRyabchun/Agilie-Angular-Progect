import {Component, Input, OnInit} from '@angular/core';
import {CollectionService} from '../../services/collection.service';

@Component({
  selector: 'app-collection',
  templateUrl: './collection.component.html',
  styleUrls: ['./collection.component.scss']
})
export class CollectionComponent implements OnInit {

  IsLoad:boolean = false;

  MyList: any = [1,2,3,4,5,6,7,8,9,0];
  AlbumName:string = "";
  Data:any;

  constructor(private collection: CollectionService) {
    setTimeout(a => {
      this.Data = this.collection.colletionData[0].name
      console.log(this.Data);
      this.IsLoad = true;
    }, 1000);
  }

  ngOnInit() {
  }



}
