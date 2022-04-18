import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Group } from '../../features/group/group.model';
import { Stack } from '../../features/stack/stack.model';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent {
  @Output() searchUpdate = new EventEmitter<Array<any>>();
  @Input() searchArray: Array<Group | Stack> = [];
  searchInput = '';
  filteredArray: Array<Group | Stack> = [];

  filter(): void {
    const input = this.searchInput.toLowerCase();
    this.filteredArray = this.searchArray.filter((e) => {
      const eName = e.name.toLowerCase();
      return eName.indexOf(input) > -1;
    });
    this.searchUpdate.emit(this.filteredArray);
  }
}
