import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  sidebarCollapsed = false;

  constructor() { }

  collapseSidebar(): void {
    this.sidebarCollapsed = true;
  }

  showSidebar(): void {
    this.sidebarCollapsed = false;
  }

}
