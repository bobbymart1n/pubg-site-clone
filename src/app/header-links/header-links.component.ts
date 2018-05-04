import { Component, Input } from '@angular/core';
import { HeaderLink } from './../models/header-link.model';

@Component({
  selector: 'app-header-links',
  templateUrl: './header-links.component.html',
  styleUrls: ['./header-links.component.scss']
})
export class HeaderLinksComponent {
  @Input() childHeaderLinkList: HeaderLink[];
  constructor() { }

}
