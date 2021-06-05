import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardLearnItemComponent } from './card-learn-item.component';

describe('CardLearnItemComponent', () => {
  let component: CardLearnItemComponent;
  let fixture: ComponentFixture<CardLearnItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardLearnItemComponent ]
    })
    .compileComponents();
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
