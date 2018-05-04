import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatchNotesComponent } from './patch-notes.component';

describe('PatchNotesComponent', () => {
  let component: PatchNotesComponent;
  let fixture: ComponentFixture<PatchNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatchNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatchNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
