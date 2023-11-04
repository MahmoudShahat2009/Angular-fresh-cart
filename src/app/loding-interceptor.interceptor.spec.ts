import { TestBed } from '@angular/core/testing';

import { LodingInterceptorInterceptor } from './loding-interceptor.interceptor';

describe('LodingInterceptorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LodingInterceptorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LodingInterceptorInterceptor = TestBed.inject(LodingInterceptorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
