import { Component } from '@angular/core';
import { HeaderLink } from './models/header-link.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';
  masterHeaderLinkList: HeaderLink[] = [
    new HeaderLink('./../assets/header-banner01.png'),
    new HeaderLink('./../assets/header-banner02.png'),
    new HeaderLink('./../assets/header-banner03.png')
  ];

}
