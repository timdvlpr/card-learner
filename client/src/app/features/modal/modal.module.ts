import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDataModalComponent } from './components/add-data-modal/add-data-modal.component';
import { DeleteDataModalComponent } from './components/delete-data-modal/delete-data-modal.component';
import { EditDataModalComponent } from './components/edit-data-modal/edit-data-modal.component';
import { InfoModalComponent } from './components/info-modal/info-modal.component';
import { StackModule } from '../stack/stack.module';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { GroupModule } from '../group/group.module';
import { CardModule } from '../card/card.module';
import { ModalService } from './services/modal.service';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faLayerGroup,
  faTimesCircle,
  faExclamationTriangle,
  faInfoCircle
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [
    AddDataModalComponent,
    DeleteDataModalComponent,
    EditDataModalComponent,
    InfoModalComponent
  ],
  imports: [
    CommonModule,
    StackModule,
    GroupModule,
    CardModule,
    NgxSmartModalModule,
    FontAwesomeModule
  ],
  providers: [ModalService],
  exports: [
    AddDataModalComponent,
    DeleteDataModalComponent,
    EditDataModalComponent,
    InfoModalComponent
  ]
})
export class ModalModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(
      faLayerGroup,
      faTimesCircle,
      faExclamationTriangle,
      faInfoCircle
    );
  }
}
