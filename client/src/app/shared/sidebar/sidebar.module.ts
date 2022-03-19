import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { GroupModule } from '../../components/group/group.module';
import { StackModule } from '../../components/stack/stack.module';

@NgModule({
  declarations: [SidebarComponent],
  imports: [
    CommonModule,
    GroupModule,
    StackModule
  ],
  exports: [SidebarComponent]
})
export class SidebarModule { }
