import { TestBed } from '@angular/core/testing';

import { SrandmService } from './srandm.service';

describe('SrandmService', () => {
  let service: SrandmService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SrandmService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
