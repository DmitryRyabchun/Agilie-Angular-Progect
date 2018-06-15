import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class LastfmService {
  request: string = "";
  apiKey: string = "b565b9a8680dcdaed7c52ed46c4ff110";
  dataTopArtists:any = [];
  dataTopArtistsAlbums: any = {};
  dataTrecks: any = [];
  searchResult: any = [];
  constructor(private http: HttpClient) {

  }

  Search(search) {
    this.request = "https://ws.audioscrobbler.com/2.0/?method=track.search&track="+search+"&api_key="+this.apiKey+"&format=json";
    this.http.get(this.request).subscribe(data => {
      this.searchResult = data;
      console.log(this.searchResult);
    });
  }

  TopArtists(){
    this.request = "https://ws.audioscrobbler.com/2.0/?method=chart.gettopartists&api_key="+this.apiKey+"&format=json&limit=6";
    this.http.get(this.request).subscribe(data => {
      this.dataTopArtists = data;
      this.TopArtistAlbums(data);
    });
  }

  TopArtistAlbums(mbid) {
    this.request = "https://ws.audioscrobbler.com/2.0/?method=artist.gettopalbums&mbid="+mbid.artists.artist[0].mbid+"&api_key="+this.apiKey+"&format=json&limit=4";
    this.http.get(this.request).subscribe(data => {
      this.dataTopArtistsAlbums = data;
    });
  }

  TopTracks() {
    this.request = "https://ws.audioscrobbler.com/2.0/?method=chart.gettoptracks&api_key="+this.apiKey+"&format=json&limit=5";
    this.http.get(this.request).subscribe(data => {
      this.dataTrecks = data;
    });
  }
}

