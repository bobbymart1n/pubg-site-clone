import { Injectable } from '@angular/core';
import { PatchNote } from './../models/patch-note.model';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PatchNotesService {
  patchNotes: FirebaseListObservable<any[]>;
  devBlogs: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.patchNotes = database.list('patchNotes');
    this.devBlogs = database.list('devBlogs');
  }

  getPatchNotes() {
    return this.patchNotes;
  }

  getBlogPosts() {
    return this.devBlogs;
  }

  getBlogPostsById(blogPostId: string) {
    return this.database.object('/blog-posts/' + blogPostId);
  }

  getPatchNotesById(patchNoteId: string) {
    return this.database.object('/patch-notes/' + patchNoteId);
  }

}
