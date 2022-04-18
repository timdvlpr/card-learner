import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlertComponent } from './alert/alert.component';
import { AlertService } from './alert.service';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faTimesCircle,
  faCheckCircle
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [AlertComponent],
  imports: [CommonModule, FontAwesomeModule],
  providers: [AlertService],
  exports: [AlertComponent]
})
export class AlertModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faTimesCircle, faCheckCircle);
  }
}
