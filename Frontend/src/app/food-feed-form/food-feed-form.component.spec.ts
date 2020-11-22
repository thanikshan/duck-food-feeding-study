import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFeedFormComponent } from './food-feed-form.component';

describe('FoodFeedFormComponent', () => {
  let component: FoodFeedFormComponent;
  let fixture: ComponentFixture<FoodFeedFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FoodFeedFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodFeedFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
