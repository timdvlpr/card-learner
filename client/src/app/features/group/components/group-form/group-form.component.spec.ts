import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupFormComponent } from './group-form.component';
import { GroupStoreService } from '../../services/group-store.service';
import { FormsModule } from '@angular/forms';
import { GroupStoreMockService } from '../../services/group-store.mock.service';

describe('GroupFormComponent', () => {
  let component: GroupFormComponent;
  let fixture: ComponentFixture<GroupFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [GroupFormComponent],
      imports: [FormsModule],
      providers: [
        { provide: GroupStoreService, useClass: GroupStoreMockService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
