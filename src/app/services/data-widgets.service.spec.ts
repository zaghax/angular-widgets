import { TestBed, inject } from '@angular/core/testing';

import { DataWidgetsService } from './data-widgets.service';

describe('DataWidgetsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DataWidgetsService]
    });
  });

  it('should be created', inject([DataWidgetsService], (service: DataWidgetsService) => {
    expect(service).toBeTruthy();
  }));
});
