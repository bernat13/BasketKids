import { TestBed } from '@angular/core/testing';

import { SJugadoresService } from './sjugadores.service';

describe('SJugadoresService', () => {
  let service: SJugadoresService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SJugadoresService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
