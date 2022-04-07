import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemListComponent } from './card-item-list.component';
import { CardStoreService } from '../card-store.service';
import { StackStoreService } from '../../stack/stack-store.service';
import { StackStoreMockService } from '../../stack/stack-store.mock.service';
import { CardStoreMockService } from '../card-store.mock.service';

describe('CardItemListComponent', () => {
  let component: CardItemListComponent;
  let fixture: ComponentFixture<CardItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardItemListComponent],
      providers: [
        { provide: CardStoreService, useClass: CardStoreMockService },
        { provide: StackStoreService, useClass: StackStoreMockService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
