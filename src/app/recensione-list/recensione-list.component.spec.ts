import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecensioneListComponent } from './recensione-list.component';

describe('RecensioneListComponent', () => {
  let component: RecensioneListComponent;
  let fixture: ComponentFixture<RecensioneListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecensioneListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecensioneListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
