import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../services/search.service';
import {CollectionService} from '../../services/collection.service';

@Component({
  selector: 'app-search-list',
  templateUrl: './search-list.component.html',
  styleUrls: ['./search-list.component.scss']
})
export class SearchListComponent implements OnInit {

  searchResult: any = [];
  name:string = "";

  constructor(private search:SearchService, private collection: CollectionService) {
    this.searchResult = this.search.searchResult;
    setTimeout(a => {
      console.log(this.searchResult);
    }, 1000);
  }

  ngOnInit() {
  }

  AddSong(item) {
    this.name = prompt("Enter name of collection");
    if(this.name != "" && this.name != null && this.name != undefined && this.name != "null") {
      this.collection.addSong(this.name, item.image[2]['#text'], item.artist, item.name);
    }
  }

}
