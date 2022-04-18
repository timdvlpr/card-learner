import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from './sidebar.component';
import { GroupModule } from '../../features/group/group.module';
import { StackModule } from '../../features/stack/stack.module';
import {
  FontAwesomeModule,
  FaIconLibrary
} from '@fortawesome/angular-fontawesome';
import {
  faArrowCircleUp,
  faArrowCircleDown,
  faLayerGroup
} from '@fortawesome/free-solid-svg-icons';

@NgModule({
  declarations: [SidebarComponent],
  imports: [CommonModule, GroupModule, StackModule, FontAwesomeModule],
  exports: [SidebarComponent]
})
export class SidebarModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faArrowCircleUp, faArrowCircleDown, faLayerGroup);
  }
}
