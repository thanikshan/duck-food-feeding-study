import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodFeedFormComponent } from './food-feed-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TranslateModule } from '@ngx-translate/core';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('FoodFeedFormComponent', () => {
  let component: FoodFeedFormComponent;
  let fixture: ComponentFixture<FoodFeedFormComponent>;
  let de: DebugElement;
  let el: HTMLElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        ReactiveFormsModule,
        HttpClientModule,
        TranslateModule.forRoot({}),
      ],
      declarations: [FoodFeedFormComponent],
    }).compileComponents();
    // .then(() => {
    //   fixture = TestBed.createComponent(FoodFeedFormComponent);
    //   component = fixture.componentInstance;
    //   component.ngOnInit();
    //   fixture.detectChanges();
    //   de = fixture.debugElement.query(By.css('form'));
    //   el = de.nativeElement;
    // });
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodFeedFormComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an h2 tag of `Duck Feeding Habits`', () => {
    expect(de.query(By.css('h1')).nativeElement.innerText).toBe('form.title');
  });

  it('should have a invalid form', () => {
    component.foodForm.controls.foodName.setValue('');
    component.foodForm.controls.foodTypeName.setValue('');
    component.foodForm.controls.locationName.setValue('');
    component.foodForm.controls.totalDucks.setValue('');
    component.foodForm.controls.quantity.setValue('');
    component.foodForm.controls.repeatSchedule.setValue('');
    component.foodForm.controls.feedTime.setValue('');
    component.foodForm.controls.uomType.setValue('');
    expect(component.foodForm.valid).toBeFalsy();
  });

  it('should have a valid form', () => {
    component.foodForm.controls.foodName.setValue('earthworms');
    component.foodForm.controls.foodTypeName.setValue('insect');
    component.foodForm.controls.locationName.setValue('pond');
    component.foodForm.controls.totalDucks.setValue(5);
    component.foodForm.controls.quantity.setValue(10);
    component.foodForm.controls.repeatSchedule.setValue(true);
    component.foodForm.controls.feedTime.setValue('18:00');
    component.foodForm.controls.uomType.setValue('KG');
    expect(component.foodForm.valid).toBeTruthy();
  });

  it('should have an button', () => {
    expect(de.query(By.css('button')).nativeElement.innerText).toBeTruthy();
  });
});
