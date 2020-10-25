import { TestBed } from '@angular/core/testing';

import { NgxErrorBoxService } from './ngx-error-box.service';

describe('NgxErrorBoxService', () => {
  let service: NgxErrorBoxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxErrorBoxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
