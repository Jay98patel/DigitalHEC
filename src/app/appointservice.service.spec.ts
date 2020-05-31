import { TestBed } from '@angular/core/testing';

import { AppointserviceService } from './appointservice.service';

describe('AppointserviceService', () => {
  let service: AppointserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AppointserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
