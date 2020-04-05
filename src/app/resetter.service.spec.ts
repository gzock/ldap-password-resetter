import { TestBed } from '@angular/core/testing';

import { ResetterService } from './resetter.service';

describe('ResetterService', () => {
  let service: ResetterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResetterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
