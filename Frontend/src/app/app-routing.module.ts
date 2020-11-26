import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodFeedFormComponent } from './food-feed-form/food-feed-form.component';
import { ListingComponent } from './listing/listing.component';

const routes: Routes = [
  {
    path: '',
    component: FoodFeedFormComponent,
  },
  {
    path: 'listing',
    component: ListingComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
