import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { myAuthGuard } from './my-auth.guard';

describe('myAuthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => myAuthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
