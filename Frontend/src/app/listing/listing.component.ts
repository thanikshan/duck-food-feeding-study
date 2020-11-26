import { Component, OnInit } from '@angular/core';
import { FeedDetailsService } from '../shared/services/feed-details.service';
import { FeedDetails } from '../shared/models/feedDetails';

@Component({
  selector: 'app-listing',
  templateUrl: './listing.component.html',
  styleUrls: ['./listing.component.css'],
})
export class ListingComponent implements OnInit {
  feedList: FeedDetails[];
  constructor(private feedDetailsService: FeedDetailsService) {
    this.feedDetailsService.getFeedDetails().subscribe((data) => {
      this.feedList = data;
      console.log(data);
    });
  }

  ngOnInit(): void {}
}
