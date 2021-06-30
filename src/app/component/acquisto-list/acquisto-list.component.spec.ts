import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {AcquistoListComponent} from './acquisto-list.component';

describe('AcquistoListComponent', () => {
  let component: AcquistoListComponent;
  let fixture: ComponentFixture<AcquistoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AcquistoListComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AcquistoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
