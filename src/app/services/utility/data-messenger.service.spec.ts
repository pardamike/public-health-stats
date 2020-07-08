import { TestBed } from '@angular/core/testing';

import { DataMessengerService } from './data-messenger.service';

describe('DataMessengerService', () => {
  let service: DataMessengerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataMessengerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
