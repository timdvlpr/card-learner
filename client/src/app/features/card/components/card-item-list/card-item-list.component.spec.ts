import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemListComponent } from './card-item-list.component';
import { CardStoreService } from '../../services/card-store.service';
import { StackStoreService } from '../../../stack/services/stack-store.service';
import { StackStoreMockService } from '../../../stack/services/stack-store.mock.service';
import { CardStoreMockService } from '../../services/card-store.mock.service';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

describe('CardItemListComponent', () => {
  let component: CardItemListComponent;
  let fixture: ComponentFixture<CardItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardItemListComponent],
      imports: [FontAwesomeTestingModule],
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
