import { Component, OnInit } from '@angular/core';
import { FirebaseListObservable } from 'angularfire2/database';
import { Router } from '@angular/router';
import { PatchNote } from './../models/patch-note.model';
import { PatchNotesService } from './../services/patch-notes.service';

@Component({
  selector: 'app-patch-notes',
  templateUrl: './patch-notes.component.html',
  styleUrls: ['./patch-notes.component.scss'],
  providers: [PatchNotesService]
})

export class PatchNotesComponent {
  patchNotes: FirebaseListObservable<any[]>;
  constructor(private router: Router, private patchNotesService: PatchNotesService) { }

  goToPatchNotePage(clickedPatchNote) {
    this.router.navigate(["patch-notes", clickedPatchNote.$key])
  }
  ngOnInit() {
    this.patchNotes = this.patchNotesService.getPatchNotes();
  }

}
