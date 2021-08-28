import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { GroupListComponent } from './components/group/group-list/group-list.component';
import { StackItemComponent } from './components/stack/stack-item/stack-item.component';
import { HomeComponent } from './views/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StackFormComponent } from './components/stack/stack-form/stack-form.component';
import { GroupFormComponent } from './components/group/group-form/group-form.component';
import { CardFormComponent } from './components/card/card-form/card-form.component';
import { AlertComponent } from './components/alert/alert/alert.component';
import { CardsComponent } from './views/cards/cards.component';
import { StackListComponent } from './components/stack/stack-list/stack-list.component';
import { CardItemComponent } from './components/card/card-item/card-item.component';
import { LearnComponent } from './views/learn/learn.component';
import { CardLearnItemComponent } from './components/card/card-learn-item/card-learn-item.component';
import { SearchbarComponent } from './shared/searchbar/searchbar.component';
import { AddDataModalComponent } from './components/modal/add-data-modal/add-data-modal.component';
import { EditDataModalComponent } from './components/modal/edit-data-modal/edit-data-modal.component';
import { StackItemListComponent } from './components/stack/stack-item-list/stack-item-list.component';
import { DeleteDataModalComponent } from './components/modal/delete-data-modal/delete-data-modal.component';
import { CardItemListComponent } from './components/card/card-item-list/card-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    GroupListComponent,
    StackItemComponent,
    HomeComponent,
    StackFormComponent,
    GroupFormComponent,
    CardFormComponent,
    AlertComponent,
    CardsComponent,
    StackListComponent,
    CardItemComponent,
    LearnComponent,
    CardLearnItemComponent,
    SearchbarComponent,
    AddDataModalComponent,
    EditDataModalComponent,
    StackItemListComponent,
    DeleteDataModalComponent,
    CardItemListComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgxSmartModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
