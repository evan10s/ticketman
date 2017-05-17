import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
  <clr-modal [(clrModalOpen)]="open">
    <h3 class="modal-title">About Ticketman</h3>
    <div class="modal-body">
      Ticketman v0.1-beta <br />
      Ticketman is licensed... under a TBD license.<br />
      Created with <3 in 2017, in Atlanta, GA
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="open = false">Close</button>
    </div>
  </clr-modal>

  `,
  styles: []
})
export class AboutComponent implements OnInit {
  open: boolean
  constructor() { }

  ngOnInit() {
  }

}
