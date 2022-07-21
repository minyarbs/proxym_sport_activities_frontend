import { TestBed } from '@angular/core/testing';

import { EventManagService } from './event-manag.service';

describe('EventManagService', () => {
  let service: EventManagService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EventManagService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
