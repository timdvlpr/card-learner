import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DataOptionBarComponent } from './data-option-bar/data-option-bar.component';
import { FormsModule } from '@angular/forms';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faSortUp,
  faSortDown,
  faSearch
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [SearchbarComponent, DataOptionBarComponent],
  imports: [CommonModule, FormsModule, FontAwesomeModule],
  exports: [SearchbarComponent, DataOptionBarComponent]
})
export class SharedModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faSortUp, faSortDown, faSearch);
  }
}
