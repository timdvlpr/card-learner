import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDataModalComponent } from './delete-data-modal.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';

describe('DeleteDataModalComponent', () => {
  let component: DeleteDataModalComponent;
  let fixture: ComponentFixture<DeleteDataModalComponent>;

  const fakeModalService = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DeleteDataModalComponent],
      imports: [NgxSmartModalModule],
      providers: [{ provide: NgxSmartModalService, useValue: fakeModalService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
