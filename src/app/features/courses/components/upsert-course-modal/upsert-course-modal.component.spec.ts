import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpsertCourseModalComponent } from './upsert-course-modal.component';

describe('UpsertCourseModalComponent', () => {
  let component: UpsertCourseModalComponent;
  let fixture: ComponentFixture<UpsertCourseModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpsertCourseModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpsertCourseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
