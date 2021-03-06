import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  template: `
  <nav>
     <section class="sidenav-content">
       <a class="nav-link active">Overview</a>
       <section class="nav-group collapsible">
         <input id="tabexample1" type="checkbox">
         <label for="tabexample1">Content</label>
         <ul class="nav-list">
           <li><a class="nav-link">Projects</a></li>
           <li><a class="nav-link">Reports</a></li>
         </ul>
       </section>
       <section class="nav-group collapsible">
         <input id="tabexample2" type="checkbox">
         <label for="tabexample2">System</label>
         <ul class="nav-list">
           <li><a class="nav-link">Users</a></li>
           <li><a class="nav-link">Settings</a></li>
         </ul>
       </section>
     </section>
  `,
  styles: []
})
export class SidebarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
