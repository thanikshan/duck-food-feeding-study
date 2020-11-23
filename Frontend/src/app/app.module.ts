import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  NgbModule,
  NgbTimepickerModule,
  NgbTypeaheadModule,
} from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { FoodFeedFormComponent } from './food-feed-form/food-feed-form.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FeatherModule } from 'angular-feather';
import { AlertCircle } from 'angular-feather/icons';

const icons = {
  AlertCircle,
};

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    FoodFeedFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    NgbTimepickerModule,
    FormsModule,
    ReactiveFormsModule,
    NgbTypeaheadModule,
    FeatherModule.pick(icons),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
