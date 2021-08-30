import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StackItemListComponent } from './stack-item-list.component';

describe('StackItemListComponent', () => {
  let component: StackItemListComponent;
  let fixture: ComponentFixture<StackItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StackItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StackItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
