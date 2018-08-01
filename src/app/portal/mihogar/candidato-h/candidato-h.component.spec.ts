import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoHComponent } from './candidato-h.component';

describe('CandidatoHComponent', () => {
  let component: CandidatoHComponent;
  let fixture: ComponentFixture<CandidatoHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatoHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
