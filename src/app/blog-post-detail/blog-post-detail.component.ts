import { Component, OnInit } from '@angular/core';
import { PatchNotesService } from './../services/patch-notes.service';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';
import { DevBlogs } from './../models/dev-blog.model';

@Component({
  selector: 'app-blog-post-detail',
  templateUrl: './blog-post-detail.component.html',
  styleUrls: ['./blog-post-detail.component.scss'],
  providers: [PatchNotesService]
})
export class BlogPostDetailComponent implements OnInit {
  blogPostId: string;
  blogPostToDisplay: DevBlogs;

  constructor(private route: ActivatedRoute, private location: Location, private patchNotesService: PatchNotesService) { }

  ngOnInit() {
    this.route.params.forEach((urlParameters) => {
      this.blogPostId = urlParameters['id'];
    });
    this.patchNotesService.getBlogPostsById(this.blogPostId).subscribe(dataLastEmittedFromObserver => {
      this.blogPostToDisplay = new DevBlogs(dataLastEmittedFromObserver.headline, dataLastEmittedFromObserver.imageLink, dataLastEmittedFromObserver.teaserText);
      console.log(this.blogPostToDisplay);
    })
  }

}
