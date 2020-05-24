import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HealthhomeComponent } from './healthhome.component';

describe('HealthhomeComponent', () => {
  let component: HealthhomeComponent;
  let fixture: ComponentFixture<HealthhomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HealthhomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HealthhomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
