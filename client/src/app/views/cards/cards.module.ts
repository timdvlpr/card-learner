import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CardsRoutingModule } from './cards-routing.module';
import { CardsComponent } from './cards.component';
import { ModalModule } from '../../components/modal/modal.module';
import { CardModule } from '../../components/card/card.module';
import { SidebarModule } from '../../shared/sidebar/sidebar.module';

@NgModule({
  declarations: [
    CardsComponent
  ],
  imports: [
    CommonModule,
    CardsRoutingModule,
    ModalModule,
    CardModule,
    SidebarModule
  ]
})
export class CardsModule { }
