import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackItemListComponent } from './stack-item-list.component';
import { StackStoreService } from '../../services/stack-store.service';
import { GroupStoreService } from '../../../group/services/group-store.service';
import { StackStoreMockService } from '../../services/stack-store.mock.service';
import { GroupStoreMockService } from '../../../group/services/group-store.mock.service';

describe('StackItemListComponent', () => {
  let component: StackItemListComponent;
  let fixture: ComponentFixture<StackItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StackItemListComponent],
      providers: [
        { provide: StackStoreService, useClass: StackStoreMockService },
        { provide: GroupStoreService, useClass: GroupStoreMockService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
