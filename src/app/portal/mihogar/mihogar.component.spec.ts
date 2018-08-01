import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MihogarComponent } from './mihogar.component';

describe('MihogarComponent', () => {
  let component: MihogarComponent;
  let fixture: ComponentFixture<MihogarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MihogarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MihogarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
