import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { CardService } from './card.service';
import { Card } from './card.model';
import { ApiPaths } from '../../core/enums/api-paths';

describe('CardService', () => {
  let service: CardService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(CardService);
    testingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => testingController.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all cards', () => {

    const mockCards: Card[] = [
      new Card(1, 'What does SQL stand for?', 'Structured Query Language', 1, ''),
      new Card(2, 'What does CSS stand for?', 'Cascading Style Sheets', 2, ''),
    ];

    service.getCards().subscribe(cards => {
      expect(mockCards).toBe(cards);
    });

    const request = testingController.expectOne(`${service.BASE_URL}${ApiPaths.Card}/all`);
    expect(request.request.method).toEqual('GET');
    request.flush(mockCards);

  });

  it('should create card', () => {

    const mockCard = new Card(1, 'What does SQL stand for?', 'Structured Query Language', 1, '');

    service.createCard(mockCard).subscribe(card => {
      expect(mockCard).toBe(card);
    });

    const request = testingController.expectOne(`${service.BASE_URL}${ApiPaths.Card}`);
    expect(request.request.method).toEqual('POST');
    request.flush(mockCard);

  });

  it('should update card', () => {

    const mockCard = new Card(1, 'What does SQL stand for?', 'Structured Query Language', 1, '');

    service.updateCard(1, mockCard).subscribe(card => {
      expect(mockCard).toBe(card);
    });

    const request = testingController.expectOne(`${service.BASE_URL}${ApiPaths.Card}/1`);
    expect(request.request.method).toEqual('PUT');
    request.flush(mockCard);

  });

  it('should return 404 error when card to update not found', () => {

    const errorMessage = 'Group not found';
    const mockCard = new Card(1, 'What does SQL stand for?', 'Structured Query Language', 1, '');

    service.updateCard(1, mockCard).subscribe(
      () => fail('404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toEqual(errorMessage);
      }
    );

    const request = testingController.expectOne(`${service.BASE_URL}${ApiPaths.Card}/1`);
    request.flush(errorMessage, { status: 404, statusText: 'Not Found' });

  });

  it('should delete card', () => {

    const mockResponse = new HttpResponse({ status: 200 });

    service.deleteCard(1).subscribe(res => {
      expect(res.status).toEqual(200);
    });

    const request = testingController.expectOne(`${service.BASE_URL}${ApiPaths.Card}/1`);
    expect(request.request.method).toEqual('DELETE');
    request.flush(mockResponse);

  });

  it('should return 404 error when card to delete not found', () => {

    const errorMessage = 'Card not found';

    service.deleteCard(1).subscribe(
      () => fail('404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toEqual(errorMessage);
      }
    );

    const request = testingController.expectOne(`${service.BASE_URL}${ApiPaths.Card}/1`);
    request.flush(errorMessage, { status: 404, statusText: 'Not Found' });

  });

});
