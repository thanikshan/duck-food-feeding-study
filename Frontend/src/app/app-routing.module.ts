import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FoodFeedFormComponent } from './food-feed-form/food-feed-form.component';


const routes: Routes = [{
  path: '',
  component: FoodFeedFormComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
