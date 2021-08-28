import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteDataModalComponent } from './delete-data-modal.component';

describe('DeleteDataModalComponent', () => {
  let component: DeleteDataModalComponent;
  let fixture: ComponentFixture<DeleteDataModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteDataModalComponent ]
    })
    .compileComponents();
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
