import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditDataModalComponent } from './edit-data-modal.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

describe('EditDataModalComponent', () => {
  let component: EditDataModalComponent;
  let fixture: ComponentFixture<EditDataModalComponent>;

  const fakeModalService = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EditDataModalComponent],
      imports: [NgxSmartModalModule, FontAwesomeTestingModule],
      providers: [{ provide: NgxSmartModalService, useValue: fakeModalService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditDataModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
