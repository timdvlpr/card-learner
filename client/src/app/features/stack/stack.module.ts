import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackFormComponent } from './components/stack-form/stack-form.component';
import { StackItemComponent } from './components/stack-item/stack-item.component';
import { StackItemListComponent } from './components/stack-item-list/stack-item-list.component';
import { StackListComponent } from './components/stack-list/stack-list.component';
import { StackService } from './services/stack.service';
import { StackStoreService } from './services/stack-store.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faExclamationCircle,
  faEdit,
  faTrash,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    StackFormComponent,
    StackItemListComponent,
    StackItemComponent,
    StackListComponent
  ],
  imports: [CommonModule, FormsModule, SharedModule, FontAwesomeModule],
  providers: [StackService, StackStoreService],
  exports: [
    StackFormComponent,
    StackItemListComponent,
    StackItemComponent,
    StackListComponent
  ]
})
export class StackModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faExclamationCircle, faEdit, faTrash, faInfoCircle);
  }
}
