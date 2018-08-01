import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarCComponent } from './buscar-c.component';

describe('BuscarCComponent', () => {
  let component: BuscarCComponent;
  let fixture: ComponentFixture<BuscarCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
