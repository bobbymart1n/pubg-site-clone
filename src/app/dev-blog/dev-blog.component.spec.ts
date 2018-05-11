import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevBlogComponent } from './dev-blog.component';

describe('DevBlogComponent', () => {
  let component: DevBlogComponent;
  let fixture: ComponentFixture<DevBlogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevBlogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
