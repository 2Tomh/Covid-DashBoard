import { TestBed } from '@angular/core/testing';

import { UploadLogService } from './upload-log.service';

describe('UploadLogService', () => {
  let service: UploadLogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UploadLogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
