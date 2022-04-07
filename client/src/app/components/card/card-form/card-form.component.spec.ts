import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardFormComponent } from './card-form.component';
import { StackStoreService } from '../../stack/stack-store.service';
import { CardStoreService } from '../card-store.service';
import { FormsModule } from '@angular/forms';
import { StackStoreMockService } from '../../stack/stack-store.mock.service';
import { CardStoreMockService } from '../card-store.mock.service';

describe('CardFormComponent', () => {
  let component: CardFormComponent;
  let fixture: ComponentFixture<CardFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardFormComponent],
      imports: [FormsModule],
      providers: [
        { provide: StackStoreService, useClass: StackStoreMockService },
        { provide: CardStoreService, useClass: CardStoreMockService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
