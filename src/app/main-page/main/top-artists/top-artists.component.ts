import { Component, OnInit } from '@angular/core';
import {LastfmService} from '../../../services/lastfm.service';


@Component({
  selector: 'app-top-artists',
  templateUrl: './top-artists.component.html',
  styleUrls: ['./top-artists.component.scss']
})
export class TopArtistsComponent implements OnInit {

  dataTopArtist: any;
  dataTopArtistsAlbums: any;
  TopArtists: any = [];
  isLoad:boolean = false;

  constructor(private lastfm:LastfmService) {
    this.lastfm.TopArtists();
    setTimeout(a => {
      this.dataTopArtist = this.lastfm.dataTopArtists.artists;
      this.dataTopArtistsAlbums = this.lastfm.dataTopArtistsAlbums.topalbums;
      for(let i = 1; i < 6; i++) {
        this.TopArtists.push(this.lastfm.dataTopArtists.artists.artist[i]);
      }
      this.isLoad = true;
    }, 1000);
    // console.log(this.lastfm.dataTopArtistsAlbums);
    //console.log(this.lastfm.dataTopArtists);
  }

  ngOnInit() {
  }

  getBeckground(img) {
    return "url("+img+")";
  }
}
