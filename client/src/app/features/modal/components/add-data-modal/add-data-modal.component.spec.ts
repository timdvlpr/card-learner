import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataModalComponent } from './add-data-modal.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

describe('AddDataModalComponent', () => {
  let component: AddDataModalComponent;
  let fixture: ComponentFixture<AddDataModalComponent>;

  const fakeModalService = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AddDataModalComponent],
      imports: [NgxSmartModalModule],
      providers: [{ provide: NgxSmartModalService, useValue: fakeModalService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
