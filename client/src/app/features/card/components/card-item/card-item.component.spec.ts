import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardItemComponent } from './card-item.component';
import { ModalService } from '../../../modal/services/modal.service';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

describe('CardItemComponent', () => {
  let component: CardItemComponent;
  let fixture: ComponentFixture<CardItemComponent>;

  const fakeModalService = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardItemComponent],
      imports: [FontAwesomeTestingModule],
      providers: [{ provide: ModalService, useValue: fakeModalService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
