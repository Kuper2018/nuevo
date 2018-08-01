import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AlertaHComponent } from './alerta-h.component';

describe('AlertaHComponent', () => {
  let component: AlertaHComponent;
  let fixture: ComponentFixture<AlertaHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertaHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertaHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
