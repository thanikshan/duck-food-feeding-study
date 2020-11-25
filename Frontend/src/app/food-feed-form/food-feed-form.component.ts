import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FoodFeedService } from '../shared/services/food-feed.service';

const states = [
  'Alabama',
  'Alaska',
  'American Samoa',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'District Of Columbia',
  'Federated States Of Micronesia',
  'Florida',
  'Georgia',
  'Guam',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Marshall Islands',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Northern Mariana Islands',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Palau',
  'Pennsylvania',
  'Puerto Rico',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virgin Islands',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
];

@Component({
  selector: 'app-food-feed-form',
  templateUrl: './food-feed-form.component.html',
  styleUrls: ['./food-feed-form.component.css'],
})
export class FoodFeedFormComponent implements OnInit {
  time: any;
  public model: any;
  foodForm: FormGroup;
  // uomType: any = 'Kg';
  constructor(
    private fb: FormBuilder,
    private foodFeedService: FoodFeedService
  ) {}

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
      uomType: ['Kg'],
    });

    //  this.foodForm.controls['uomType'].setValue('Kg');
  }

  ngOnInit(): void {
    this.initializeForm();
  }

  eventFired($event) {
    console.log($event);
  }

  search = (text$: Observable<string>) =>
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map((term) =>
        term.length < 2
          ? []
          : states
              .filter((v) => v.toLowerCase().indexOf(term.toLowerCase()) > -1)
              .slice(0, 10)
      )
    );

  submit() {
    if (this.foodForm.invalid) {
      console.log('food invalid');
    } else {
      console.log(this.foodForm);
      // this.foodForm.controls['uomType'].setValue(this.uomType);
      this.foodFeedService
        .addFoodFeed(this.foodForm.value)
        .subscribe((data) => {
          console.log(data);
        });
    }
  }

  reset() {
    //this.uomType = 'Kg';
    //console.log(this.uomType);
    //this.foodForm.reset(this.foodForm.value);
    this.initializeForm();
    //this.foodForm.controls['uomType'].setValue('Kg');
    // this.initializeForm();
  }
}
