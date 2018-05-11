import { Injectable } from '@angular/core';
import { Social } from './../models/social.model';

@Injectable()
export class SocialMediaService {
  tweet: Social;
  constructor() {
    this.tweet = new Social('https://twitter.com/PUBG?ref_src=twsrc%5Etfw');
  }
  getTweets() {
    return this.tweet;
  }
}
