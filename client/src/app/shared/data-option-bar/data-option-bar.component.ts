import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-data-option-bar',
  templateUrl: './data-option-bar.component.html',
  styleUrls: ['./data-option-bar.component.scss']
})
export class DataOptionBarComponent {
  @Input() sortedByName = false;
  @Input() sortedDescending = false;
  @Output() sortedByNameEvent = new EventEmitter();
  @Output() sortedOrderEvent = new EventEmitter();

  sortByName(): void {
    this.sortedByNameEvent.emit();
  }

  changeSortOrder(): void {
    this.sortedOrderEvent.emit();
  }
}
