import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { GroupStoreService } from '../../features/group/services/group-store.service';
import { StackStoreService } from '../../features/stack/services/stack-store.service';
import { StackStoreMockService } from '../../features/stack/services/stack-store.mock.service';
import { GroupStoreMockService } from '../../features/group/services/group-store.mock.service';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HomeComponent],
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
