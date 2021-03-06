import { Component } from '@angular/core'
import { EventsListService } from './events-list.service';
import { Event } from './event';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthComponent } from './ui/auth/auth.component';
@Component({
  selector: "events",
  templateUrl: "./event.component.html",
  styles: [ `
    .current {
      color: blue;
    }
  `,"assets/global.css"],
  providers: [EventsListService, AuthComponent]
})
export class EventComponent {
  events: Event[];
  constructor(
    private eventsListService: EventsListService,
    private router: Router,
    private auth: AuthComponent,
    private activatedRoute: ActivatedRoute
  ) { }
  isToday(event: Event): boolean {
    const today = new Date();
    return today >= event.startDate && today <= event.endDate;
  }
  getEvents(): Event[] {
    return this.eventsListService.getEvents();
  }
  goToEvent(event: Event): void {
    this.router.navigate([event.id], { relativeTo: this.activatedRoute})
  }
}
