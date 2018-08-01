import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmpleadorHComponent } from './empleador-h.component';

describe('EmpleadorHComponent', () => {
  let component: EmpleadorHComponent;
  let fixture: ComponentFixture<EmpleadorHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmpleadorHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmpleadorHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
