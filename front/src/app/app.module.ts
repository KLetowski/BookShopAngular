import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpConfigService } from './services/http-config.service';
import { AppComponent } from './app.component';

import {
  BooksListComponent,
  BookComponent,
  BasketComponent,
  TopNavigationComponent,
  OrderComponent,
  PreviousPageButtonComponent,
  PlaceholderComponent
} from './components/index.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import {
  LazyLoadImageModule,
  intersectionObserverPreset
} from 'ng-lazyload-image';

import { AppRoutingModule } from './app-modules/app-routing.module';
import { AppNotificationModule } from './app-modules/app-notification.module';
import { AppMaterialModule } from './app-modules/app-material.module';
import { AppNgrxModule } from './app-modules/app-ngrx-config.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BookComponent,
    BasketComponent,
    TopNavigationComponent,
    OrderComponent,
    PreviousPageButtonComponent,
    PlaceholderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    InfiniteScrollModule,
    FormsModule,
    ReactiveFormsModule,
    LazyLoadImageModule.forRoot({
      preset: intersectionObserverPreset
    }),
    BrowserAnimationsModule,
    AppRoutingModule,
    AppMaterialModule,
    AppNotificationModule,
    AppNgrxModule,
    NgxUiLoaderModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: HttpConfigService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
