import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLearnItemComponent } from './card-learn-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

describe('CardLearnItemComponent', () => {
  let component: CardLearnItemComponent;
  let fixture: ComponentFixture<CardLearnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardLearnItemComponent],
      imports: [BrowserAnimationsModule, FontAwesomeTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardLearnItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
