import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFormComponent } from './card-form/card-form.component';
import { CardItemComponent } from './card-item/card-item.component';
import { CardItemListComponent } from './card-item-list/card-item-list.component';
import { CardLearnItemComponent } from './card-learn-item/card-learn-item.component';
import { CardService } from './card.service';
import { CardStoreService } from './card-store.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CardFormComponent,
    CardItemComponent,
    CardItemListComponent,
    CardLearnItemComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    CardService,
    CardStoreService
  ],
  exports: [
    CardFormComponent,
    CardItemComponent,
    CardItemListComponent,
    CardLearnItemComponent
  ]
})
export class CardModule { }
