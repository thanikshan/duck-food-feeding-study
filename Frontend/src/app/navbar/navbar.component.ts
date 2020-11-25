import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  language;
  constructor(private translate: TranslateService) {
    this.language = navigator.language.trim().split(/-|_/)[0];
    this.translate.setDefaultLang(this.language);
    console.log(this.language);
  }

  ngOnInit(): void {}

  changeLanguage() {
    this.translate.use(this.language);
  }
}
