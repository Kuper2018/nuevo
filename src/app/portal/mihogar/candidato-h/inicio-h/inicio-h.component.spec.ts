import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioHComponent } from './inicio-h.component';

describe('InicioHComponent', () => {
  let component: InicioHComponent;
  let fixture: ComponentFixture<InicioHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InicioHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
