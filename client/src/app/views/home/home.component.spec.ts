import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { GroupStoreService } from '../../features/group/services/group-store.service';
import { StackStoreService } from '../../features/stack/services/stack-store.service';
import { StackStoreMockService } from '../../features/stack/services/stack-store.mock.service';
import { GroupStoreMockService } from '../../features/group/services/group-store.mock.service';
import { MockComponent } from 'ng-mocks';
import { AddDataModalComponent } from '../../features/modal/components/add-data-modal/add-data-modal.component';
import { EditDataModalComponent } from '../../features/modal/components/edit-data-modal/edit-data-modal.component';
import { DeleteDataModalComponent } from '../../features/modal/components/delete-data-modal/delete-data-modal.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { StackItemListComponent } from '../../features/stack/components/stack-item-list/stack-item-list.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        HomeComponent,
        MockComponent(AddDataModalComponent),
        MockComponent(EditDataModalComponent),
        MockComponent(DeleteDataModalComponent),
        MockComponent(SidebarComponent),
        MockComponent(StackItemListComponent)
      ],
      providers: [
        { provide: GroupStoreService, useClass: GroupStoreMockService },
        { provide: StackStoreService, useClass: StackStoreMockService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
