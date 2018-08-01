import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarCComponent } from './registrar-c.component';

describe('RegistrarCComponent', () => {
  let component: RegistrarCComponent;
  let fixture: ComponentFixture<RegistrarCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistrarCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
