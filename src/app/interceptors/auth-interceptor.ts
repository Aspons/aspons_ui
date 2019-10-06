import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/catch';
import {Router} from '@angular/router';
import 'rxjs-compat/add/observable/of';
import { ErrorObservable } from 'rxjs/observable/ErrorObservable';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) { }

  private handleAuthError(err: HttpErrorResponse): Observable<any> {
    if (err.status === 401 || err.status === 403) {
      this.router.navigateByUrl('');
      return Observable.of(err.message);
    }
    return ErrorObservable.create('error');;
  }

  intercept(req: HttpRequest<any>,
            next: HttpHandler): Observable<HttpEvent<any>> {

    const idToken = localStorage.getItem('id_token');
    const cloned = req.clone({
      headers: req.headers.set('Authorization',
        'Bearer ' + idToken)
    });
    return next.handle(cloned).catch(x => this.handleAuthError(x));
  }
}
