import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FoodType } from '../shared/models/foodType';
import { Location } from '../shared/models/location';
import { FoodFeedService } from '../shared/services/food-feed.service';
import { FoodTypeService } from '../shared/services/food-type.service';
import { FoodService } from '../shared/services/food.service';
import { LocationService } from '../shared/services/location.service';
import { UomService } from '../shared/services/uom.service';
import { Food } from '../shared/models/food';
import { UOM } from '../shared/models/uom';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from '../modal/modal.component';

@Component({
  selector: 'app-food-feed-form',
  templateUrl: './food-feed-form.component.html',
  styleUrls: ['./food-feed-form.component.css'],
})
export class FoodFeedFormComponent implements OnInit {
  time: any;
  public model: any;
  foodForm: FormGroup;
  locations: Location[] = [];
  foodTypes: FoodType[] = [];
  food: Food[] = [];
  uom: UOM[];
  showToast: boolean = false;
  showError = false;
  // uomType: any = 'Kg';
  constructor(
    private fb: FormBuilder,
    private foodFeedService: FoodFeedService,
    private locationService: LocationService,
    private foodTypeService: FoodTypeService,
    private foodService: FoodService,
    private uomService: UomService,
    private modalService: NgbModal
  ) {
    this.autoSuggestionCalls();
    this.uomService.getUom().subscribe((data) => {
      this.uom = data;
      console.log(this.uom);
    });
  }

  autoSuggestionCalls() {
    this.getLocations();
    this.getFoodTypes();
    this.getFood();
  }

  initializeForm() {
    this.foodForm = this.fb.group({
      foodTypeName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')],
      ],
      foodName: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')],
      ],
      locationName: ['', [Validators.required]],
      totalDucks: ['', [Validators.required]],
      quantity: ['', [Validators.required]],
      repeatSchedule: [],
      feedTime: ['', Validators.required],
      uomType: ['KG'],
    });

    //this.foodForm.controls['uomType'].setValue('KG');
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  eventFired($event) {
    console.log($event);
  }

  locationTypeAhead = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : this.locations
              .filter(
                (location) =>
                  location.locationName
                    .toLowerCase()
                    .indexOf(term.toLowerCase()) > -1
              )
              .map((location) => location.locationName)
              .slice(0, 10)
      )
    );

  foodTypeTypeAhead = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : this.foodTypes
              .filter(
                (foodType) =>
                  foodType.foodTypeName
                    .toLowerCase()
                    .indexOf(term.toLowerCase()) > -1
              )
              .map((foodType) => foodType.foodTypeName)
              .slice(0, 10)
      )
    );

  foodTypeAhead = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : this.food
              .filter(
                (food) =>
                  food.foodName.toLowerCase().indexOf(term.toLowerCase()) > -1
              )
              .map((food) => food.foodName)
              .slice(0, 10)
      )
    );

  getLocations() {
    this.locationService.getLocations().subscribe((data) => {
      this.locations = data;
      console.log(this.locations);
    });
  }

  getFoodTypes() {
    this.foodTypeService.getFoodTypes().subscribe((data) => {
      this.foodTypes = data;
      console.log(this.foodTypes);
    });
  }

  getFood() {
    this.foodService.getFood().subscribe((data) => {
      this.food = data;
      console.log(this.food);
    });
  }

  submit() {
    if (this.foodForm.invalid) {
      console.log('food invalid');
      this.showError = true;
    } else {
      var locTime = this.foodForm.controls['feedTime'].value;
      var date = new Date();
      date.setHours(locTime.split(':')[0], locTime.split(':')[1]);
      this.foodForm.controls['feedTime'].setValue(
        date.getUTCHours() + ':' + date.getUTCMinutes()
      );
      console.log(this.foodForm.controls['feedTime'].value);
      this.foodFeedService
        .addFoodFeed(this.foodForm.value)
        .subscribe((data) => {
          console.log(data);
          this.showError = false;
          this.autoSuggestionCalls();
          this.reset();
          this.open();
        });
    }
  }

  reset() {
    this.initializeForm();
  }

  open() {
    const modalRef = this.modalService.open(ModalComponent);
  }
}
