import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Location } from '@angular/common';

import 'rxjs/add/operator/switchMap';
import { EventsListService } from '../events-list.service';
import { Event } from '../event';

@Component({
  selector: "event-details",
  templateUrl: './event-details.component.html',
  providers: [EventsListService, Event]
})
export class EventDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private location: Location,
    private event: Event,
    private eventsListService: EventsListService
  ) {}
  ngOnInit(): void {
    //event = this.eventComponent.eventsList[this.route.params.id]
    //getting route parameter values used significant help from http://stackoverflow.com/a/38062615
    let c = this.route.params.subscribe((params: Params) => {
      this.event = this.eventsListService.getEvent(+params.id);
    });
  }

}
