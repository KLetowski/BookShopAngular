import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler
} from '@angular/common/http';

const httpConfig = {
  url: 'http://localhost:3001'
};

@Injectable()
export class HttpConfigService implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const apiRequest = request.clone({
      url: httpConfig.url + request.url
    });

    return next.handle(apiRequest);
  }
}
