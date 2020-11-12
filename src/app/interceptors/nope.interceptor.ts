import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpEventType
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class NopeInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log(`%c requete initialisee vers ${request.url}`, "background:grey");
    return next.handle(request).pipe( map ((event : HttpEvent<any>) => {
      console.log(`%c requete succes ${request.url}`, "background:green");

      // TODO : ici on peut par exemple gérer les erreurs
      return event;
    }));
  }
}
