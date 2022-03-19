import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LearnRoutingModule } from './learn-routing.module';
import { CardModule } from '../../components/card/card.module';
import { LearnComponent } from './learn.component';

@NgModule({
  declarations: [
    LearnComponent
  ],
  imports: [
    CommonModule,
    LearnRoutingModule,
    CardModule
  ]
})
export class LearnModule { }
