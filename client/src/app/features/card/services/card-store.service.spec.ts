import { TestBed } from '@angular/core/testing';

import { CardStoreService } from './card-store.service';
import { CardService } from './card.service';
import { Card } from '../card.model';
import { of } from 'rxjs';

describe('CardStoreService', () => {
  let service: CardStoreService;
  let cardServiceSpy: jasmine.SpyObj<CardService>;
  const spy = jasmine.createSpyObj('CardService', [
    'loadInitialData',
    'getCards',
    'createCard',
    'updateCard',
    'deleteCard'
  ]);
  const mockCard = new Card(
    1,
    'What does SQL stand for?',
    'Structured Query Language',
    2,
    ''
  );

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CardStoreService, { provide: CardService, useValue: spy }]
    });
    cardServiceSpy = TestBed.inject(CardService) as jasmine.SpyObj<CardService>;
    cardServiceSpy.getCards.and.returnValue(of({ success: true, cards: [] }));
    service = TestBed.inject(CardStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all cards from the store', () => {
    service.cardSource.next([mockCard]);
    expect(service.getAll()).toEqual([mockCard]);
  });

  it('should add a card to the store', () => {
    cardServiceSpy.createCard.and.returnValue(
      of({ success: true, card: mockCard })
    );
    service.add(mockCard);
    service.cards$.subscribe((cards) => {
      expect(cards).toEqual(service.getAll());
    });
    expect(cardServiceSpy.createCard).toHaveBeenCalledTimes(1);
  });

  it('should update a card from the store', () => {
    service.cardSource.next([mockCard]);
    cardServiceSpy.updateCard.and.returnValue(
      of({ success: true, card: mockCard })
    );
    service.update(mockCard.id!, mockCard);
    service.cards$.subscribe((cards) => {
      expect(cards).toEqual([mockCard]);
    });
    expect(cardServiceSpy.updateCard).toHaveBeenCalledTimes(1);
  });

  it('should remove a card from the store', () => {
    service.cardSource.next([mockCard]);
    cardServiceSpy.deleteCard.and.returnValue(of(''));
    service.remove(1);
    expect(service.getAll()).toEqual([]);
    expect(cardServiceSpy.deleteCard).toHaveBeenCalledTimes(1);
  });
});
