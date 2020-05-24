import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NearbyhospitalComponent } from './nearbyhospital.component';

describe('NearbyhospitalComponent', () => {
  let component: NearbyhospitalComponent;
  let fixture: ComponentFixture<NearbyhospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NearbyhospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NearbyhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
