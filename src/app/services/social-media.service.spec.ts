import { TestBed, inject } from '@angular/core/testing';

import { SocialMediaService } from './social-media.service';

describe('SocialMediaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SocialMediaService]
    });
  });

  it('should be created', inject([SocialMediaService], (service: SocialMediaService) => {
    expect(service).toBeTruthy();
  }));
});
