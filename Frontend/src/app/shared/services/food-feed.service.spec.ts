import { TestBed } from '@angular/core/testing';

import { FoodFeedService } from './food-feed.service';

describe('FoodFeedService', () => {
  let service: FoodFeedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FoodFeedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
