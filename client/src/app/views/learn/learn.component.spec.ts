import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearnComponent } from './learn.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CardService } from '../../features/card/services/card.service';
import { Card } from '../../features/card/card.model';
import { of } from 'rxjs';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

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
      imports: [
        RouterTestingModule.withRoutes([]),
        FontAwesomeTestingModule,
        BrowserAnimationsModule
      ],
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
