import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { DataOptionBarComponent } from './data-option-bar/data-option-bar.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    SearchbarComponent,
    DataOptionBarComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    SearchbarComponent,
    DataOptionBarComponent
  ]
})
export class SharedModule { }
