import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrelloListComponent } from './carrello-list.component';

describe('CarrelloListComponent', () => {
  let component: CarrelloListComponent;
  let fixture: ComponentFixture<CarrelloListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarrelloListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrelloListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
