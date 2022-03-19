import { TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpErrorResponse, HttpResponse } from '@angular/common/http';
import { GroupService } from './group.service';
import { Group } from './group.model';
import { ApiPaths } from '../../core/enums/api-paths';

describe('GroupService', () => {
  let service: GroupService;
  let testingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(GroupService);
    testingController = TestBed.inject(HttpTestingController);
  });

  afterEach(() => testingController.verify());

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all groups', () => {

    const mockGroups: Group[] = [
      new Group('Javascript', 1, 'javascript'),
      new Group('Typescript', 2, 'typescript')
    ];

    service.getGroups().subscribe(groups => {
      expect(mockGroups).toBe(groups);
    });

    const request = testingController.expectOne(`${service.BASE_URL}${ApiPaths.Group}/all`);
    expect(request.request.method).toEqual('GET');
    request.flush(mockGroups);

  });

  it('should create group', () => {

    const mockGroup = new Group('Datenbanksysteme', 3, 'datenbanksysteme');

    service.createGroup(mockGroup).subscribe(group => {
      expect(mockGroup).toBe(group);
    });

    const request = testingController.expectOne(`${service.BASE_URL}${ApiPaths.Group}`);
    expect(request.request.method).toEqual('POST');
    request.flush(mockGroup);

  });

  it('should update group', () => {

    const mockGroup = new Group('Frameworks', 4, 'frameworks');

    service.updateGroup(4, mockGroup).subscribe(group => {
      expect(mockGroup).toBe(group);
    });

    const request = testingController.expectOne(`${service.BASE_URL}${ApiPaths.Group}/4`);
    expect(request.request.method).toEqual('PUT');
    request.flush(mockGroup);

  });

  it('should return 404 error when group to update not found', () => {

    const errorMessage = 'Group not found';
    const mockGroup = new Group('Frameworks', 4, 'frameworks');

    service.updateGroup(4, mockGroup).subscribe(
      () => fail('404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toEqual(errorMessage);
      }
    );

    const request = testingController.expectOne(`${service.BASE_URL}${ApiPaths.Group}/4`);
    request.flush(errorMessage, { status: 404, statusText: 'Not Found' });

  });

  it('should delete group', () => {

    const mockResponse = new HttpResponse({ status: 200 });

    service.deleteGroup(5).subscribe(res => {
      expect(res.status).toEqual(200);
    });

    const request = testingController.expectOne(`${service.BASE_URL}${ApiPaths.Group}/5`);
    expect(request.request.method).toEqual('DELETE');
    request.flush(mockResponse);

  });

  it('should return 404 error when group to delete not found', () => {

    const errorMessage = 'Group not found';

    service.deleteGroup(5).subscribe(
      () => fail('404 error'),
      (error: HttpErrorResponse) => {
        expect(error.status).toEqual(404);
        expect(error.error).toEqual(errorMessage);
      }
    );

    const request = testingController.expectOne(`${service.BASE_URL}${ApiPaths.Group}/5`);
    request.flush(errorMessage, { status: 404, statusText: 'Not Found' });

  });

});
