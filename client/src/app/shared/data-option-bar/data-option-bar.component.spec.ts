import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DataOptionBarComponent } from './data-option-bar.component';
import { FontAwesomeTestingModule } from '@fortawesome/angular-fontawesome/testing';

describe('DataOptionBarComponent', () => {
  let component: DataOptionBarComponent;
  let fixture: ComponentFixture<DataOptionBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DataOptionBarComponent],
      imports: [FontAwesomeTestingModule]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DataOptionBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
