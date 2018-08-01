import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OfidemComponent } from './ofidem.component';

describe('OfidemComponent', () => {
  let component: OfidemComponent;
  let fixture: ComponentFixture<OfidemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OfidemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OfidemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
