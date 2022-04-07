import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';
import { CardStoreService } from '../../components/card/card-store.service';
import { CardStoreMockService } from '../../components/card/card-store.mock.service';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardsComponent],
      providers: [{ provide: CardStoreService, useClass: CardStoreMockService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
