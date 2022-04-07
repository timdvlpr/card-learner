import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackFormComponent } from './stack-form.component';
import { GroupStoreService } from '../../../group/services/group-store.service';
import { StackStoreService } from '../../services/stack-store.service';
import { FormsModule } from '@angular/forms';
import { StackStoreMockService } from '../../services/stack-store.mock.service';
import { GroupStoreMockService } from '../../../group/services/group-store.mock.service';

describe('StackFormComponent', () => {
  let component: StackFormComponent;
  let fixture: ComponentFixture<StackFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StackFormComponent],
      imports: [FormsModule],
      providers: [
        { provide: GroupStoreService, useClass: GroupStoreMockService },
        { provide: StackStoreService, useClass: StackStoreMockService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
