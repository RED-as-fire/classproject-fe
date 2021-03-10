import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NebularTableComponent } from './nebular-table.component';

describe('NebularTableComponent', () => {
  let component: NebularTableComponent;
  let fixture: ComponentFixture<NebularTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NebularTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NebularTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
