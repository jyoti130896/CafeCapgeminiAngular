import { TestBed } from '@angular/core/testing';

import { CapCafeService } from './cap-cafe.service';

describe('CapCafeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CapCafeService = TestBed.get(CapCafeService);
    expect(service).toBeTruthy();
  });
});
