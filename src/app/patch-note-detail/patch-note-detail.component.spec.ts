import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchNoteDetailComponent } from './patch-note-detail.component';

describe('PatchNoteDetailComponent', () => {
  let component: PatchNoteDetailComponent;
  let fixture: ComponentFixture<PatchNoteDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatchNoteDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchNoteDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
