import { TestBed, inject } from '@angular/core/testing';

import { PatchNotesService } from './patch-notes.service';

describe('PatchNotesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PatchNotesService]
    });
  });

  it('should be created', inject([PatchNotesService], (service: PatchNotesService) => {
    expect(service).toBeTruthy();
  }));
});
