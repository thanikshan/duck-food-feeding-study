import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';
import { TranslateModule } from '@ngx-translate/core';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot({})],
      declarations: [NavbarComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have an button', () => {
    expect(de.query(By.css('button')).nativeElement.innerText).toBeTruthy();
  });

  it('should have an button with value as current data', () => {
    expect(de.query(By.css('button')).nativeElement.innerText).toBe(
      'Current Data'
    );
  });

  it('should have an select element', () => {
    expect(de.query(By.css('select')).nativeElement.innerText).toBeTruthy();
  });
});
