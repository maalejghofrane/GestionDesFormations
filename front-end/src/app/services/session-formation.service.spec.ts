import { TestBed } from '@angular/core/testing';

import { SessionFormationService } from './session-formation.service';

describe('SessionFormationService', () => {
  let service: SessionFormationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessionFormationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
