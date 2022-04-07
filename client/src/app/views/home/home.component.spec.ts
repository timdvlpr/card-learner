import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeComponent } from './home.component';
import { GroupStoreService } from '../../components/group/group-store.service';
import { StackStoreService } from '../../components/stack/stack-store.service';
import { StackStoreMockService } from '../../components/stack/stack-store.mock.service';
import { GroupStoreMockService } from '../../components/group/group-store.mock.service';

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
