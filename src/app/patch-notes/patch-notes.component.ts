import { Component, Input } from '@angular/core';
import { PatchNote } from './../models/patch-note.model';
@Component({
  selector: 'app-patch-notes',
  templateUrl: './patch-notes.component.html',
  styleUrls: ['./patch-notes.component.scss']
})
export class PatchNotesComponent {
  @Input() childPatchNoteList: PatchNote[];
  constructor() { }

}
