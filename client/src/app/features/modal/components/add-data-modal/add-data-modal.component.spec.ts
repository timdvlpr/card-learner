import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddDataModalComponent } from './add-data-modal.component';
import { NgxSmartModalModule, NgxSmartModalService } from 'ngx-smart-modal';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';
import { MockComponent } from 'ng-mocks';
import { GroupFormComponent } from '../../../group/components/group-form/group-form.component';
import { StackFormComponent } from '../../../stack/components/stack-form/stack-form.component';
import { CardFormComponent } from '../../../card/components/card-form/card-form.component';

describe('AddDataModalComponent', () => {
  let component: AddDataModalComponent;
  let fixture: ComponentFixture<AddDataModalComponent>;

  const fakeModalService = {};

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AddDataModalComponent,
        MockComponent(GroupFormComponent),
        MockComponent(StackFormComponent),
        MockComponent(CardFormComponent)
      ],
      imports: [NgxSmartModalModule, FontAwesomeTestingModule],
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
