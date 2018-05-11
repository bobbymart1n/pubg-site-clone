import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { HeaderLink } from './../models/header-link.model';
import { Announcement } from './../models/announcement.model';
import { HeaderLinksComponent } from './../header-links/header-links.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']

})
export class HomeComponent implements OnInit {

  constructor() { }

  masterHeaderLinkList: HeaderLink[] = [
    new HeaderLink('./../assets/header-banner01.png'),
    new HeaderLink('./../assets/header-banner02.png'),
    new HeaderLink('./../assets/header-banner03.png')
  ];

  ngOnInit() {

  }

}
