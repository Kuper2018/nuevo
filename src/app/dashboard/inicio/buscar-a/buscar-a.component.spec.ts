import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscarAComponent } from './buscar-a.component';

describe('BuscarAComponent', () => {
  let component: BuscarAComponent;
  let fixture: ComponentFixture<BuscarAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuscarAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscarAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
