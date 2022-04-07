import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { StackModule } from '../../features/stack/stack.module';
import { HomeComponent } from './home.component';
import { ModalModule } from '../../features/modal/modal.module';
import { SidebarModule } from '../../shared/sidebar/sidebar.module';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    StackModule,
    ModalModule,
    SidebarModule
  ]
})
export class HomeModule {}
