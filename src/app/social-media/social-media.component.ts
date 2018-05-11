import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  constructor() { }

  ngOnInit() {
    // This is from twitters own embed documentation
    !function(d,s,id){
      var js: any,
          fjs=d.getElementsByTagName(s)[0],
          p='https';
      if(!d.getElementById(id)){
          js=d.createElement(s);
          js.id=id;
          js.src=p+"://platform.twitter.com/widgets.js";
          fjs.parentNode.insertBefore(js,fjs);
      }
    }(document,"script","twitter-wjs");
  }

}
