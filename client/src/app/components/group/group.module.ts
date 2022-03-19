import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupFormComponent } from './group-form/group-form.component';
import { GroupListComponent } from './group-list/group-list.component';
import { GroupService } from './group.service';
import { GroupStoreService } from './group-store.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    GroupFormComponent,
    GroupListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    GroupService,
    GroupStoreService
  ],
  exports: [
    GroupFormComponent,
    GroupListComponent
  ]
})
export class GroupModule { }
