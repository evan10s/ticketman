import { TestBed, inject } from '@angular/core/testing';

import { EventsListService } from './events-list.service';

describe('EventsListService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EventsListService]
    });
  });

  it('should ...', inject([EventsListService], (service: EventsListService) => {
    expect(service).toBeTruthy();
  }));
});
