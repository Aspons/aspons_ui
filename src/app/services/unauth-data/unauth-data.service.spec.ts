import { TestBed, inject } from '@angular/core/testing';

import { UnauthDataService } from './unauth-data.service';

describe('UnauthDataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UnauthDataService]
    });
  });

  it('should be created', inject([UnauthDataService], (service: UnauthDataService) => {
    expect(service).toBeTruthy();
  }));
});
