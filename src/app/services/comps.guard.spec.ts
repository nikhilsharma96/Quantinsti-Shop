import { TestBed } from '@angular/core/testing';

import { CompsGuard } from './comps.guard';

describe('CompsGuard', () => {
  let guard: CompsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CompsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
