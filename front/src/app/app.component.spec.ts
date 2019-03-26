import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './components/top-navigation/top-navigation.component';
import { RouterTestingModule } from '@angular/router/testing';
import { NotifierModule } from 'angular-notifier';
import { AppMaterialModule } from './app-modules/app-material.module';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule, NotifierModule, AppMaterialModule],
      declarations: [AppComponent, TopNavigationComponent]
    }).compileComponents();
  }));
});
