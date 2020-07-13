import { TestBed } from '@angular/core/testing';

import { LoDataService } from './lo-data.service';

describe('LoDataService', () => {
  let service: LoDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
