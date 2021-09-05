import { TestBed } from '@angular/core/testing';

import { HapiFhirServiceService } from './hapi-fhir-service.service';

describe('HapiFhirServiceService', () => {
  let service: HapiFhirServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HapiFhirServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
