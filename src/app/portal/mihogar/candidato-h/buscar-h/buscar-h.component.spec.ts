import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarHComponent } from './buscar-h.component';

describe('BuscarHComponent', () => {
  let component: BuscarHComponent;
  let fixture: ComponentFixture<BuscarHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
