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

  AddSong() {
    this.name = prompt("Enter name of collection");
    if(this.name != "") {
      this.collection.addSong(this.name, this.searchResult[0].image[1]['#text'], this.searchResult[0].artist, this.searchResult[0].name);
    }
  }

}
