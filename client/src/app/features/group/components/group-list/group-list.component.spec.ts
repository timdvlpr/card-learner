import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupListComponent } from './group-list.component';
import { ModalService } from '../../../modal/services/modal.service';
import { GroupStoreService } from '../../services/group-store.service';
import { SharedModule } from '../../../../shared/shared.module';
import { GroupStoreMockService } from '../../services/group-store.mock.service';

describe('GroupListComponent', () => {
  let component: GroupListComponent;
  let fixture: ComponentFixture<GroupListComponent>;

  const fakeModalService = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupListComponent],
      imports: [SharedModule],
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
