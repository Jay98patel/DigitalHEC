import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CampshealthComponent } from './campshealth.component';

describe('CampshealthComponent', () => {
  let component: CampshealthComponent;
  let fixture: ComponentFixture<CampshealthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CampshealthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CampshealthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
