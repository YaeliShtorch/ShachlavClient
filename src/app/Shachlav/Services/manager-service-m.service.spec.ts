import { TestBed } from '@angular/core/testing';

import { ManagerServiceMService } from './manager-service-m.service';

describe('ManagerServiceMService', () => {
  let service: ManagerServiceMService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagerServiceMService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
