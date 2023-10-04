import { TestBed } from '@angular/core/testing';

import { SpartidosService } from './spartidos.service';

describe('SpartidosService', () => {
  let service: SpartidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpartidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
