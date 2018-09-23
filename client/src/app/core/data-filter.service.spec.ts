import { TestBed } from '@angular/core/testing';

import { DataFilterService } from './data-filter.service';

describe('DataFilterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataFilterService = TestBed.get(DataFilterService);
    expect(service).toBeTruthy();
  });
});
