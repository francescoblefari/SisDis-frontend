import { TestBed } from '@angular/core/testing';

import { DettaglioOrdineService } from './dettaglio-ordine.service';

describe('DettaglioOrdineService', () => {
  let service: DettaglioOrdineService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DettaglioOrdineService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
