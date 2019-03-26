import { BooksService } from './books.service';
import { TestBed, inject } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController
} from '@angular/common/http/testing';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpConfigService } from './http-config.service';

describe('BookService', () => {
  let service: BooksService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [
        BooksService,
        { provide: HTTP_INTERCEPTORS, useClass: HttpConfigService, multi: true }
      ]
    });

    service = TestBed.get(BooksService);
    httpMock = TestBed.get(HttpTestingController);
  });

  it('should create BookService', inject(
    [BooksService],
    (service: BooksService) => {
      expect(service).toBeTruthy();
    }
  ));

  it('fetchBooks() should be a GET method', () => {
    service.fetchBooks().subscribe(data => {});

    const req = httpMock.expectOne(`http://localhost:3001/api/book?page=1`);
    expect(req.request.method).toBe('GET');
  });

  afterEach(() => {
    httpMock.verify();
  });
});
