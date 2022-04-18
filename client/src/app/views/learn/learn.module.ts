import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { CardModule } from '../../features/card/card.module';
import { LearnComponent } from './learn.component';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faInfoCircle,
  faKeyboard,
  faLongArrowAltRight,
  faLongArrowAltLeft,
  faLongArrowAltDown,
  faLongArrowAltUp,
  faChevronLeft,
  faChevronRight
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [LearnComponent],
  imports: [CommonModule, LearnRoutingModule, CardModule, FontAwesomeModule]
})
export class LearnModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faInfoCircle,
      faKeyboard,
      faLongArrowAltRight,
      faLongArrowAltLeft,
      faLongArrowAltDown,
      faLongArrowAltUp,
      faChevronLeft,
      faChevronRight
    );
  }
}
