import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PatchNoteDetailComponent } from './patch-note-detail/patch-note-detail.component';

const appRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'patch-notes/:id',
    component: PatchNoteDetailComponent
  },
  {
    path: 'blog-posts/:id',
    component: PatchNoteDetailComponent
  }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
