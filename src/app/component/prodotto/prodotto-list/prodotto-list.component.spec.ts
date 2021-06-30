import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {ProdottoListComponent} from './prodotto-list.component';

describe('ProdottoListComponent', () => {
  let component: ProdottoListComponent;
  let fixture: ComponentFixture<ProdottoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ProdottoListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProdottoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
