import { TestBed, inject } from '@angular/core/testing';

import { NativePseudoService } from './native.pseudo.service';

describe('NativePseudoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NativePseudoService]
    });
  });

  it('should be created', inject([NativePseudoService], (service: NativePseudoService) => {
    expect(service).toBeTruthy();
  }));
});
