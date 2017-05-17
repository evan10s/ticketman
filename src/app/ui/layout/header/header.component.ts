import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
  <header class="header-1">
    <div class="branding">
      <a class="nav-link">
        <clr-icon shape="shield"></clr-icon>
        <span class="title">Ticketman</span>
      </a>
    </div>
    <form class="search">
      <label for="search_input">
        <input disabled id="search_input" type="text" placeholder="Search for keywords...">
      </label>
    </form>
    <div class="header-actions">
      <clr-dropdown clrMenuPosition="bottom-right">
        <button class="nav-icon" clrDropdownToggle>
          <clr-icon shape="user"></clr-icon>
          <clr-icon shape="caret down"></clr-icon>
        </button>
        <clr-dropdown-menu>
          <a clrDropdownItem (click)="aboutModal.open = true">About</a>
          <a clrDropdownItem>Preferences</a>
          <a clrDropdownItem>Log out</a>
        </clr-dropdown-menu>
      </clr-dropdown>
    </div>
  </header>
  <nav class="subnav">
    <ul class="nav">
      <li class="nav-item">
        <a class="nav-link" href="#">Dashboard</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" routerLink="/" routerLinkActive="active">Events</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Check-in</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Reports</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="#">Users</a>
      </li>
    </ul>
  </nav>
  <app-about #aboutModal></app-about>
  `,
  styles: []
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
