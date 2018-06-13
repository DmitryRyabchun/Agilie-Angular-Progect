import { Injectable } from '@angular/core';
import {LastfmService} from './lastfm.service';

@Injectable()
export class SearchService {

  isList:boolean = false;
  searchResult:any = [];

  constructor(private lastfm:LastfmService) {
  }

  keyDownFunction(event, search) {
      this.searchResult = this.lastfm.Search(search);
      this.isList = false;
      setTimeout(a => {
        this.searchResult = this.lastfm.searchResult.results.trackmatches.track;
        console.log(this.searchResult);
        this.isList = true;
    }, 2000);
  }

}
