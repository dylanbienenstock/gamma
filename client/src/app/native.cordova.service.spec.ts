import { TestBed, inject } from '@angular/core/testing';

import { NativeCordovaService } from './native.cordova.service';

describe('NativeCordovaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NativeCordovaService]
    });
  });

  it('should be created', inject([NativeCordovaService], (service: NativeCordovaService) => {
    expect(service).toBeTruthy();
  }));
});
