import { TestBed } from '@angular/core/testing';

import { UserdeailsService } from './userdeails.service';

describe('UserdeailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserdeailsService = TestBed.get(UserdeailsService);
    expect(service).toBeTruthy();
  });
});
