import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { RouterModule } from '@angular/router';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpErrorInterceptor } from './interceptors/http-error.interceptor';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faHome,
  faPlusCircle,
  faBook
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [HeaderComponent],
  imports: [CommonModule, RouterModule, FontAwesomeModule],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ],
  exports: [HeaderComponent]
})
export class CoreModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faHome, faPlusCircle, faBook);
  }
}
