import { Component } from '@angular/core'
import { EventsListService } from './events-list.service';
import { Event } from './event';
import { Router } from '@angular/router';
@Component({
  selector: "events",
  templateUrl: "./event.component.html",
  styles: [ `
    .current {
      color: blue;
    }
  `,"assets/global.css"],
  providers: [EventsListService]
})
export class EventComponent {
  events: Event[];
  constructor(
    private eventsListService: EventsListService,
    private router: Router
  ) { }
  isToday(event: Event): boolean {
    const today = new Date();
    return today >= event.startDate && today <= event.endDate;
  }
  getEvents(): Event[] {
    return this.eventsListService.getEvents();
  }
  goToEvent(event: Event): void {
    this.router.navigate(['/events',event.id])
  }
}
