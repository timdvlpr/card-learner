import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardsComponent } from './cards.component';
import { CardStoreService } from '../../features/card/services/card-store.service';
import { CardStoreMockService } from '../../features/card/services/card-store.mock.service';
import { MockComponent } from 'ng-mocks';
import { InfoModalComponent } from '../../features/modal/components/info-modal/info-modal.component';
import { AddDataModalComponent } from '../../features/modal/components/add-data-modal/add-data-modal.component';
import { EditDataModalComponent } from '../../features/modal/components/edit-data-modal/edit-data-modal.component';
import { DeleteDataModalComponent } from '../../features/modal/components/delete-data-modal/delete-data-modal.component';
import { SidebarComponent } from '../../shared/sidebar/sidebar.component';
import { CardItemListComponent } from '../../features/card/components/card-item-list/card-item-list.component';

describe('CardsComponent', () => {
  let component: CardsComponent;
  let fixture: ComponentFixture<CardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CardsComponent,
        MockComponent(InfoModalComponent),
        MockComponent(AddDataModalComponent),
        MockComponent(EditDataModalComponent),
        MockComponent(DeleteDataModalComponent),
        MockComponent(SidebarComponent),
        MockComponent(CardItemListComponent)
      ],
      providers: [{ provide: CardStoreService, useClass: CardStoreMockService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
