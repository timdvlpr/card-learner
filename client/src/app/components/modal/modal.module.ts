import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddDataModalComponent } from './add-data-modal/add-data-modal.component';
import { DeleteDataModalComponent } from './delete-data-modal/delete-data-modal.component';
import { EditDataModalComponent } from './edit-data-modal/edit-data-modal.component';
import { InfoModalComponent } from './info-modal/info-modal.component';
import { StackModule } from '../stack/stack.module';
import { NgxSmartModalModule } from 'ngx-smart-modal';
import { GroupModule } from '../group/group.module';
import { AlertModule } from '../alert/alert.module';
import { CardModule } from '../card/card.module';
import { ModalService } from './modal.service';

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
    AlertModule,
    CardModule,
    NgxSmartModalModule
  ],
  providers: [
    ModalService
  ],
  exports: [
    AddDataModalComponent,
    DeleteDataModalComponent,
    EditDataModalComponent,
    InfoModalComponent
  ]
})
export class ModalModule { }
