import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { GroupModule } from '../../features/group/group.module';
import { StackModule } from '../../features/stack/stack.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, GroupModule, StackModule],
  exports: [SidebarComponent]
})
export class SidebarModule {}
