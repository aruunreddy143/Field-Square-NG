import { TestBed } from '@angular/core/testing';

import { FieldSquareService } from './field-square.service';

describe('FieldSquareService', () => {
  let service: FieldSquareService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FieldSquareService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
