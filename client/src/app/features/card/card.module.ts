import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardFormComponent } from './components/card-form/card-form.component';
import { CardItemComponent } from './components/card-item/card-item.component';
import { CardItemListComponent } from './components/card-item-list/card-item-list.component';
import { CardLearnItemComponent } from './components/card-learn-item/card-learn-item.component';
import { CardService } from './services/card.service';
import { CardStoreService } from './services/card-store.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    CardFormComponent,
    CardItemComponent,
    CardItemListComponent,
    CardLearnItemComponent
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  providers: [CardService, CardStoreService],
  exports: [
    CardFormComponent,
    CardItemComponent,
    CardItemListComponent,
    CardLearnItemComponent
  ]
})
export class CardModule {}
