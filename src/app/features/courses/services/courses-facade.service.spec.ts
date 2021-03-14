import { TestBed } from '@angular/core/testing';

import { CoursesFacadeService } from './courses-facade.service';

describe('CoursesFacadeService', () => {
  let service: CoursesFacadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesFacadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
