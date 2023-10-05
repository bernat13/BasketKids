import { TestBed } from '@angular/core/testing';

import { SEquiposService } from './sequipos.service';

describe('SEquiposService', () => {
  let service: SEquiposService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SEquiposService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
