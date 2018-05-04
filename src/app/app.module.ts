import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeaderComponent } from './header/header.component';
import { HeaderLinksComponent } from './header-links/header-links.component';
import { PatchNotesComponent } from './patch-notes/patch-notes.component';
import { AnnouncementsComponent } from './announcements/announcements.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    HeaderLinksComponent,
    PatchNotesComponent,
    AnnouncementsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
