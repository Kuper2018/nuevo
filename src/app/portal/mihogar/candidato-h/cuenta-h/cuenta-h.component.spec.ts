import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentaHComponent } from './cuenta-h.component';

describe('CuentaHComponent', () => {
  let component: CuentaHComponent;
  let fixture: ComponentFixture<CuentaHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuentaHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentaHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
