import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {

  @Output() stackError = new EventEmitter<string>();
  sidebarCollapsed = false;

  constructor() { }

  collapseSidebar(): void {
    this.sidebarCollapsed = true;
  }

  showSidebar(): void {
    this.sidebarCollapsed = false;
  }

  showStackError(error: string): void {
    this.stackError.emit(error);
  }

}
