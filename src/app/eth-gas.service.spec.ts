import { TestBed } from '@angular/core/testing';

import { EthGasService } from './eth-gas.service';

describe('EthGasService', () => {
  let service: EthGasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EthGasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
