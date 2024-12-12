import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (req.url.startsWith('https://catapi')) {
      console.log('Auth Interceptor triggered for:', req.url);
    } else {
      console.log('Skipping Interceptor for:', req.url);
    }
    return next.handle(req);
  }
}