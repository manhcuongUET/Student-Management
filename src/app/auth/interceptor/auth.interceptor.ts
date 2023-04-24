import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { TOKEN } from 'src/app/core/consts/consts';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let result = next.handle(request);
    const token = localStorage.getItem(TOKEN);

    if (token && token !== '') {
      const headers = request.headers.append('Authorization', `Bearer ${token}`);
      const req: HttpRequest<any> = request.clone({ headers });
      result = next.handle(req).pipe(
        tap(
          (event: HttpEvent<any>) => {
            return event;
          },
          (err: HttpErrorResponse) => {
            if (err.error.status === 401) {
              localStorage.removeItem(TOKEN);
              // localStorage.removeItem('currentUser');
            } else if (err.error.status === 500) {
              //implement notify
            }
          }
        )
      );
    }
    return result;
  }
}
