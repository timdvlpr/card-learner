import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/layout/header/header.component';
import { SidebarComponent } from './components/layout/sidebar/sidebar.component';
import { GroupListComponent } from './components/group/group-list/group-list.component';
import { StackItemComponent } from './components/stack/stack-item/stack-item.component';
import { HomeComponent } from './views/home/home.component';
import { AddEditModalComponent } from './components/modal/add-edit-modal/add-edit-modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StackFormComponent } from './components/stack/stack-form/stack-form.component';
import { GroupFormComponent } from './components/group/group-form/group-form.component';
import { CardFormComponent } from './components/card/card-form/card-form.component';
import { AlertComponent } from './components/alert/alert/alert.component';
import { ConfirmationModalComponent } from './components/modal/confirmation-modal/confirmation-modal.component';
import { CardsComponent } from './views/cards/cards.component';
import { StackListComponent } from './components/stack/stack-list/stack-list.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    GroupListComponent,
    StackItemComponent,
    HomeComponent,
    AddEditModalComponent,
    StackFormComponent,
    GroupFormComponent,
    CardFormComponent,
    AlertComponent,
    ConfirmationModalComponent,
    CardsComponent,
    StackListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
