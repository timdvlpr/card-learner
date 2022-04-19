import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupListComponent } from './group-list.component';
import { ModalService } from '../../../modal/services/modal.service';
import { GroupStoreService } from '../../services/group-store.service';
import { GroupStoreMockService } from '../../services/group-store.mock.service';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { MockComponent } from 'ng-mocks';
import { SearchbarComponent } from '../../../../shared/searchbar/searchbar.component';

describe('GroupListComponent', () => {
  let component: GroupListComponent;
  let fixture: ComponentFixture<GroupListComponent>;

  const fakeModalService = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupListComponent, MockComponent(SearchbarComponent)],
      imports: [FontAwesomeTestingModule],
      providers: [
        { provide: ModalService, useValue: fakeModalService },
        { provide: GroupStoreService, useClass: GroupStoreMockService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
