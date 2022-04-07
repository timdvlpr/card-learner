import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackListComponent } from './stack-list.component';
import { StackStoreService } from '../../services/stack-store.service';
import { StackStoreMockService } from '../../services/stack-store.mock.service';

describe('StackListComponent', () => {
  let component: StackListComponent;
  let fixture: ComponentFixture<StackListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StackListComponent],
      providers: [
        { provide: StackStoreService, useClass: StackStoreMockService }
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
