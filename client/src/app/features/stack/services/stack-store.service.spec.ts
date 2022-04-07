import { TestBed } from '@angular/core/testing';

import { StackStoreService } from './stack-store.service';
import { StackService } from './stack.service';
import { Stack } from '../stack.model';
import { of } from 'rxjs';

describe('StackStoreService', () => {
  let service: StackStoreService;
  let stackServiceSpy: jasmine.SpyObj<StackService>;
  const spy = jasmine.createSpyObj('StackService', [
    'loadInitialData',
    'getStacks',
    'createStack',
    'updateStack',
    'deleteStack'
  ]);
  const mockStack = new Stack(1, 'SQL', 'sql', 2);

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [StackStoreService, { provide: StackService, useValue: spy }]
    });
    stackServiceSpy = TestBed.inject(
      StackService
    ) as jasmine.SpyObj<StackService>;
    stackServiceSpy.getStacks.and.returnValue(
      of({ success: true, stacks: [] })
    );
    service = TestBed.inject(StackStoreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get all stacks from the store', () => {
    service.stackSource.next([mockStack]);
    expect(service.getAll()).toEqual([mockStack]);
  });

  it('should add a stack to the store', () => {
    stackServiceSpy.createStack.and.returnValue(
      of({ success: true, group: mockStack })
    );
    service.add(mockStack);
    service.stacks$.subscribe((stacks) => {
      expect(stacks).toEqual(service.getAll());
    });
    expect(stackServiceSpy.createStack).toHaveBeenCalledTimes(1);
  });

  it('update a stack from the store', () => {
    service.stackSource.next([mockStack]);
    stackServiceSpy.updateStack.and.returnValue(
      of({ success: true, group: mockStack })
    );
    service.update(mockStack.id!, mockStack);
    service.stacks$.subscribe((stacks) => {
      expect(stacks).toEqual([mockStack]);
    });
    expect(stackServiceSpy.updateStack).toHaveBeenCalledTimes(1);
  });

  it('should remove a stack from the store', () => {
    service.stackSource.next([mockStack]);
    stackServiceSpy.deleteStack.and.returnValue(of(''));
    service.remove(1);
    expect(service.getAll()).toEqual([]);
    expect(stackServiceSpy.deleteStack).toHaveBeenCalledTimes(1);
  });
});
