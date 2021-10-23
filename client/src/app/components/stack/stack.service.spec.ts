import { TestBed } from '@angular/core/testing';

import { StackService } from './stack.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Stack } from './stack.model';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';

describe('StackService', () => {
  let service: StackService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(StackService);
    testingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => testingController.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all stacks', () => {

    const mockStacks: Stack[] = [
      new Stack(1, 'Async Programming', 'async-programming', 1),
      new Stack(2, 'SQL', 'sql', 2),
    ];

    service.getStacks().subscribe(stacks => {
      expect(mockStacks).toBe(stacks);
    });

    const request = testingController.expectOne(`${service.API_URL}/all`);
    expect(request.request.method).toEqual('GET');
    request.flush(mockStacks);

  });

  it('should create stack', () => {

    const mockStack = new Stack(1, 'Async Programming', 'async-programming', 1);

    service.createStack(mockStack).subscribe(stack => {
      expect(mockStack).toBe(stack);
    });

    const request = testingController.expectOne(service.API_URL);
    expect(request.request.method).toEqual('POST');
    request.flush(mockStack);

  });

  it('should update stack', () => {

    const mockStack = new Stack(1, 'Async Programming', 'async-programming', 1);

    service.updateStack(1, mockStack).subscribe(stack => {
      expect(mockStack).toBe(stack);
    });

    const request = testingController.expectOne(`${service.API_URL}/1`);
    expect(request.request.method).toEqual('PUT');
    request.flush(mockStack);

  });

  it('should return 404 error when stack to update not found', () => {

    const errorMessage = 'Stack not found';
    const mockStack = new Stack(1, 'Async Programming', 'async-programming', 1);

    service.updateStack(1, mockStack).subscribe(
      () => fail('404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toEqual(errorMessage);
      }
    );

    const request = testingController.expectOne(`${service.API_URL}/1`);
    request.flush(errorMessage, { status: 404, statusText: 'Not Found' });

  });

  it('should delete stack', () => {

    const mockResponse = new HttpResponse({ status: 200 });

    service.deleteStack(1).subscribe(res => {
      expect(res.status).toEqual(200);
    });

    const request = testingController.expectOne(`${service.API_URL}/1`);
    expect(request.request.method).toEqual('DELETE');
    request.flush(mockResponse);

  });

  it('should return 404 error when stack to delete not found', () => {

    const errorMessage = 'Stack not found';

    service.deleteStack(1).subscribe(
      () => fail('404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toEqual(errorMessage);
      }
    );

    const request = testingController.expectOne(`${service.API_URL}/1`);
    request.flush(errorMessage, { status: 404, statusText: 'Not Found' });

  });

});
