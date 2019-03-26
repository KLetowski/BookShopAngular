import {
  async,
  ComponentFixture,
  TestBed,
  inject
} from '@angular/core/testing';

import { BooksListComponent } from './books-list.component';
import { AppMaterialModule } from 'src/app/app-modules/app-material.module';
import { NgxUiLoaderModule } from 'ngx-ui-loader';
import { BookComponent } from '../book/book.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import LazyLoadImageModule from 'ng-lazyload-image';
import { Store, StoreModule } from '@ngrx/store';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppState } from 'src/app/store/store';

describe('BooksListComponent', () => {
  let component: BooksListComponent;
  let fixture: ComponentFixture<BooksListComponent>;
  let appStore: Store<AppState>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        AppMaterialModule,
        NgxUiLoaderModule,
        InfiniteScrollModule,
        LazyLoadImageModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({})
      ],
      declarations: [BooksListComponent, BookComponent]
    }).compileComponents();
  }));

  beforeEach(inject([Store], (testStore: Store<AppState>) => {
    fixture = TestBed.createComponent(BooksListComponent);
    component = fixture.componentInstance;
    appStore = fixture.debugElement.injector.get<any>(Store);
    fixture.detectChanges();
  }));

  it('should create', async () => {
    expect(component).toBeTruthy();
  });
});
