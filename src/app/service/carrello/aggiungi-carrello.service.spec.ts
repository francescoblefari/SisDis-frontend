import { TestBed } from '@angular/core/testing';

import { AggiungiCarrelloService } from './aggiungi-carrello.service';

describe('AggiungiCarrelloService', () => {
  let service: AggiungiCarrelloService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AggiungiCarrelloService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
