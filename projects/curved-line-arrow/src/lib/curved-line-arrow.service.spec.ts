import { TestBed } from '@angular/core/testing';

import { CurvedLineArrowService } from './curved-line-arrow.service';

describe('CurvedLineArrowService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CurvedLineArrowService = TestBed.get(CurvedLineArrowService);
    expect(service).toBeTruthy();
  });
});
