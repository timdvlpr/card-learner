import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupFormComponent } from './components/group-form/group-form.component';
import { GroupListComponent } from './components/group-list/group-list.component';
import { GroupService } from './services/group.service';
import { GroupStoreService } from './services/group-store.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [GroupFormComponent, GroupListComponent],
  imports: [CommonModule, FormsModule, SharedModule],
  providers: [GroupService, GroupStoreService],
  exports: [GroupFormComponent, GroupListComponent]
})
export class GroupModule {}
