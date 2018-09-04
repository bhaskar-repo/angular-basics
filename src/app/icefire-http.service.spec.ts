import { TestBed, inject } from '@angular/core/testing';

import { IcefireHttpService } from './icefire-http.service';

describe('IcefireHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IcefireHttpService]
    });
  });

  it('should be created', inject([IcefireHttpService], (service: IcefireHttpService) => {
    expect(service).toBeTruthy();
  }));
});
