import { TestBed, inject } from '@angular/core/testing';

import { BridgeService } from './bridge.service';

describe('BridgeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BridgeService]
    });
  });

  it('should be created', inject([BridgeService], (service: BridgeService) => {
    expect(service).toBeTruthy();
  }));
});
