import { Injectable } from '@angular/core';
import { PatchNote } from './../models/patch-note.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PatchNotesService {
  patchNotes: FirebaseListObservable<any[]>;;
  constructor(private database: AngularFireDatabase) {
    this.patchNotes = database.list('patchNotes');
  }

  getPatchNotes() {
    return this.patchNotes;
  }

  getPatchNotesById(patchNoteId: string) {
    return this.database.object('patch-notes/' + patchNoteId);
  }

}
