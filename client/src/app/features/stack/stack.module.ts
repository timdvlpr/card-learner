import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackFormComponent } from './components/stack-form/stack-form.component';
import { StackItemComponent } from './components/stack-item/stack-item.component';
import { StackItemListComponent } from './components/stack-item-list/stack-item-list.component';
import { StackListComponent } from './components/stack-list/stack-list.component';
import { StackService } from './services/stack.service';
import { StackStoreService } from './services/stack-store.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    StackFormComponent,
    StackItemListComponent,
    StackItemComponent,
    StackListComponent
  ],
  imports: [CommonModule, FormsModule, SharedModule],
  providers: [StackService, StackStoreService],
  exports: [
    StackFormComponent,
    StackItemListComponent,
    StackItemComponent,
    StackListComponent
  ]
})
export class StackModule {}
