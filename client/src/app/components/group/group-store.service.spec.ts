import { TestBed } from '@angular/core/testing';

import { GroupStoreService } from './group-store.service';
import { GroupService } from './group.service';
import { Group } from './group.model';
import { of } from 'rxjs';

describe('GroupStoreService', () => {
  let service: GroupStoreService;
  let groupServiceSpy: jasmine.SpyObj<GroupService>;
  const spy = jasmine.createSpyObj('GroupService', ['loadInitialData', 'getGroups', 'createGroup', 'updateGroup', 'deleteGroup']);
  const mockGroup = new Group('Javascript', 1, 'javascript');

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        GroupStoreService,
        { provide: GroupService, useValue: spy },
      ]
    });
    groupServiceSpy = TestBed.inject(GroupService) as jasmine.SpyObj<GroupService>;
    groupServiceSpy.getGroups.and.returnValue(of({ success: true, groups: [] }));
    service = TestBed.inject(GroupStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all', () => {
    service.groupSource.next([mockGroup])
    expect(service.getAll()).toEqual([mockGroup]);
  });

  it('should add a group to the store', () => {
    groupServiceSpy.createGroup.and.returnValue(of({ success: true, group: mockGroup }));
    service.add(mockGroup);
    service.groups$.subscribe(groups => {
      expect(groups).toEqual(service.getAll());
    });
    expect(groupServiceSpy.createGroup).toHaveBeenCalledTimes(1);
  });

  it('should update a group from the store', () => {
    service.groupSource.next([mockGroup]);
    groupServiceSpy.updateGroup.and.returnValue(of({ success: true, group: mockGroup }));
    service.update(mockGroup.id!, mockGroup);
    service.groups$.subscribe(groups => {
      expect(groups).toEqual([mockGroup])
    });
    expect(groupServiceSpy.updateGroup).toHaveBeenCalledTimes(1);
  });

  it('should remove a group from the store', () => {
    service.groupSource.next([mockGroup])
    groupServiceSpy.deleteGroup.and.returnValue(of(''));
    service.remove(1);
    expect(service.getAll()).toEqual([]);
    expect(groupServiceSpy.deleteGroup).toHaveBeenCalledTimes(1);
  });

});
