import { Component } from '@angular/core';
import { HeaderLink } from './models/header-link.model';
import { PatchNote } from './models/patch-note.model';
import { Announcement } from './models/announcement.model';

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
  masterPatchNoteList: PatchNote[] = [
    new PatchNote('./../assets/patch-note-1-thumb.jpg', 'Lorem ipsum dolar set', 'Lorem ipsum dolar set'),
    new PatchNote('./../assets/patch-note-2-thumb.jpg', 'Lorem ipsum dolar set', 'Lorem ipsum dolar set')
  ];
  masterAnnouncementList: Announcement[] = [
    new Announcement('./../assets/announcement-1.jpg', 'Lorem ipsum dolar', 'Lorem ipsum dolar set'),
    new Announcement('./../assets/announcement-2.png', 'Lorem ipsum dolar', 'Lorem ipsum dolar set'),
    new Announcement('./../assets/announcement-3.jpg', 'Lorem ipsum dolar', 'Lorem ipsum dolar set'),
    new Announcement('./../assets/announcement-4.png', 'Lorem ipsum dolar', 'Lorem ipsum dolar set'),
    new Announcement('./../assets/announcement-5.jpg', 'Lorem ipsum dolar', 'Lorem ipsum dolar set')
  ];

}
