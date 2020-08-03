import { TestBed } from '@angular/core/testing';

import { OgTagService } from './og-tag.service';

describe('OgTagService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OgTagService = TestBed.get(OgTagService);
    expect(service).toBeTruthy();
  });
});
