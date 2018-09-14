import { TestBed } from '@angular/core/testing';

import { FindEatService } from './find-eat.service';

describe('FindEatService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FindEatService = TestBed.get(FindEatService);
    expect(service).toBeTruthy();
  });
});
