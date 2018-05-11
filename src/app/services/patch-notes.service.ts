import { Injectable } from '@angular/core';
import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Injectable()
export class PatchNotesService {
  patchNotes: FirebaseListObservable<any[]>;
  devBlogs: FirebaseListObservable<any[]>;
  announcements: FirebaseListObservable<any[]>;
  constructor(private database: AngularFireDatabase) {
    this.patchNotes = database.list('patchNotes');
    this.devBlogs = database.list('devBlogs');
    this.announcements = database.list('announcements');
  }

  getPatchNotes() {
    return this.patchNotes;
  }

  getBlogPosts() {
    return this.devBlogs;
  }

  getAnnouncements() {
    return this.announcements;
  }

  getBlogPostsById(blogPostId: string) {
    return this.database.object('/blog-posts/' + blogPostId);
  }

  getPatchNotesById(patchNoteId: string) {
    return this.database.object('/patch-notes/' + patchNoteId);
  }

}
