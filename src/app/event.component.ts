import { Component } from '@angular/core'

@Component({
  selector: "events",
  templateUrl: "./event.component.html",
  styles: [ `
    li:first-child {
      color: blue;
    }
  `]
})
export class EventComponent {
  eventsList: Event[] = [
    { name: "Fluffy Bonanza 2017",
      startDate: new Date(2017,6,14,12,30),
      endDate: new Date(2017,6,17,18,30),
      location: "Centennial Olympic Park",
      host: "Fluffy"
    },
    { name: "Fluffy Bonanza 2018",
      startDate: new Date(2018,6,15,12,30),
      endDate: new Date(2018,6,18,18,30),
      location: "Centennial Olympic Park",
      host: "Fluffy"
    },
    { name: "Fluffy Bonanza 2019",
      startDate: new Date(2019,6,16,12,30),
      endDate: new Date(2019,6,19,18,30),
      location: "Centennial Olympic Park",
      host: "Baby Fluff"
    },
  ];
  selectedEvent: Event;
  onSelect(event: Event): void {
    this.selectedEvent = event;
  }
}

export class Event {
  name: string;
  startDate: Date;
  endDate: Date;
  location: string;
  host: string;
}
