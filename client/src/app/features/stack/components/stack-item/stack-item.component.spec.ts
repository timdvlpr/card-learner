import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackItemComponent } from './stack-item.component';
import { ModalService } from '../../../modal/services/modal.service';
import { RouterTestingModule } from '@angular/router/testing';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

describe('StackItemComponent', () => {
  let component: StackItemComponent;
  let fixture: ComponentFixture<StackItemComponent>;

  const fakeModalService = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StackItemComponent],
      imports: [RouterTestingModule.withRoutes([]), FontAwesomeTestingModule],
      providers: [{ provide: ModalService, useValue: fakeModalService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
