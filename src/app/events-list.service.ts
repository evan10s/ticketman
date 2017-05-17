import { Injectable } from '@angular/core';
import { Event } from './event';
import { eventsList } from './events';



@Injectable()
export class EventsListService {
  getEvents(): Event[] {
    return eventsList;
  }
  getEvent(i: number): any {
    if (i >= 0 && i < eventsList.length) {
        return eventsList[i]
    }
    return "none";
  }


}
