import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../../services/search.service';

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.scss']
})
export class LeftMenuComponent implements OnInit {

  constructor(private search:SearchService) { }

  ngOnInit() {
  }

  hideList() {
    this.search.isList = false;
  }

}
