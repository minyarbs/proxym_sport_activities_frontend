import { TestBed } from '@angular/core/testing';

import { ManagusersService } from './managusers.service';

describe('ManagusersService', () => {
  let service: ManagusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
