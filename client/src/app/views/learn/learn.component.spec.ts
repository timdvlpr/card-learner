import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnComponent } from './learn.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CardService } from '../../components/card/card.service';
import { Card } from '../../components/card/card.model';
import { of } from 'rxjs';

describe('LearnComponent', () => {
  let component: LearnComponent;
  let fixture: ComponentFixture<LearnComponent>;

  const mockCard = new Card(1, 'test question', 'test answer', 1, 'test');
  const fakeCardService = jasmine.createSpyObj<CardService>('CardService', {
    getCardsInStack: of({ cards: [mockCard] })
  });

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [LearnComponent],
      imports: [RouterTestingModule.withRoutes([])],
      providers: [{ provide: CardService, useValue: fakeCardService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
