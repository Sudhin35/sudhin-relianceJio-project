import { TestBed } from '@angular/core/testing';

import { ExcelSheetDataService } from './excel-sheet-data.service';

describe('ExcelSheetDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExcelSheetDataService = TestBed.get(ExcelSheetDataService);
    expect(service).toBeTruthy();
  });
});
