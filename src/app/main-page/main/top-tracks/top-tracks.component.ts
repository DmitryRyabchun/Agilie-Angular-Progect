import { Component, OnInit } from '@angular/core';
import {LastfmService} from '../../../services/lastfm.service';

@Component({
  selector: 'app-top-tracks',
  templateUrl: './top-tracks.component.html',
  styleUrls: ['./top-tracks.component.scss']
})
export class TopTracksComponent implements OnInit {

  TopTracks: any = [];
  isLoad:boolean = false;

  constructor(private lastfm:LastfmService) {
    this.lastfm.TopTracks();
    setTimeout(a => {
      this.TopTracks = this.lastfm.dataTrecks.tracks.track;
      console.log(this.TopTracks);
      this.isLoad = true;
    },1000);
  }

  ngOnInit() {
  }

}
