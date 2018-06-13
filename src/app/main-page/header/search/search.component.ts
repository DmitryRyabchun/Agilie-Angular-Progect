import { Component, OnInit } from '@angular/core';
import {LastfmService} from '../../../services/lastfm.service';
import {SearchService} from '../../../services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private lastfm: LastfmService, private search:SearchService) {
    this.lastfm.TopArtists();
  }

  ngOnInit() {
  }

  keyDown(event, search) {
    if(event.keyCode == 13) {
      this.search.keyDownFunction(event, search);
    }
  }
}
