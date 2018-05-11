import { Component, OnInit } from '@angular/core';
import { Announcement } from './../models/announcement.model';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { PatchNotesService } from './../services/patch-notes.service';

@Component({
  selector: 'app-announcements',
  templateUrl: './announcements.component.html',
  styleUrls: ['./announcements.component.scss'],
  providers: [PatchNotesService]
})
export class AnnouncementsComponent implements OnInit {
  announcements: FirebaseListObservable<any[]>;
  constructor(private router: Router, private patchNotesService: PatchNotesService) { }
  ngOnInit() {
    this.announcements = this.patchNotesService.getAnnouncements();
  }
}
