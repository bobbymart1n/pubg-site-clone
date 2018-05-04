import { Component, Input } from '@angular/core';
import { Announcement } from './../models/announcement.model';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss']
})
export class AnnouncementsComponent {
  @Input() childAnnouncementList: Announcement[];
  constructor() { }

}
