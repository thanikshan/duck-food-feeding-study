import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { debounceTime, distinctUntilChanged, map } from 'rxjs/operators';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

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

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    // prettier-ignore
    this.foodForm = this.fb.group({
      foodType: [
        '',
        [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')],
      ],
      food: ['', [Validators.required, Validators.pattern('^[a-zA-Z\\s]*$')]],
      location: ['', [Validators.required]],
      numberOfDucks: ['', [Validators.required]],
      foodQuantity: ['', [Validators.required]],
      repeatFood: [],
      feedTime: ['', Validators.required],
      quantityType: [],
    });

    this.foodForm.controls['quantityType'].setValue('Kg');
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
    }
  }
}
