import {
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class FootballDataApiInterceptor implements HttpInterceptor {
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const isFootballDataRequest = req.url.includes('football-data.org');
    const request = isFootballDataRequest
      ? req.clone({
          setHeaders: {
            'x-auth-token': environment.footballDataAPIToken,
          },
        })
      : req;
    return next.handle(request);
  }
}
