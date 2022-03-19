import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StackFormComponent } from './stack-form/stack-form.component';
import { StackItemComponent } from './stack-item/stack-item.component';
import { StackItemListComponent } from './stack-item-list/stack-item-list.component';
import { StackListComponent } from './stack-list/stack-list.component';
import { StackService } from './stack.service';
import { StackStoreService } from './stack-store.service';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [
    StackFormComponent,
    StackItemListComponent,
    StackItemComponent,
    StackListComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  providers: [
    StackService,
    StackStoreService
  ],
  exports: [
    StackFormComponent,
    StackItemListComponent,
    StackItemComponent,
    StackListComponent
  ]
})
export class StackModule { }
