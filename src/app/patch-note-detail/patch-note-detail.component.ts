import { Component, OnInit } from '@angular/core';
import { PatchNotesService } from './../services/patch-notes.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-patch-note-detail',
  templateUrl: './patch-note-detail.component.html',
  styleUrls: ['./patch-note-detail.component.scss'],
  providers: [PatchNotesService]
})

export class PatchNoteDetailComponent implements OnInit {
  patchNoteId: string;
  patchNoteToDisplay;
  constructor(private route: ActivatedRoute, private location: Location, private patchNotesService: PatchNotesService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
     this.patchNoteId = urlParameters['id'];
   });
   this.patchNotesService.getPatchNotesById(this.patchNoteId).subscribe(dataLastEmittedFromObserver => {
     this.patchNoteToDisplay = dataLastEmittedFromObserver;
   })
   // this.patchNoteToDisplay = this.patchNotesService.getPatchNotesById(this.patchNoteId);
  }

}
