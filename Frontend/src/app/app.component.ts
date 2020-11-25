import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'duck-food-feeding-frontend';

  constructor(private translate: TranslateService) {
    console.log(navigator.language);
    let language = navigator.language.trim();
    translate.setDefaultLang(language.split(/-|_/)[0]);
  }
}
