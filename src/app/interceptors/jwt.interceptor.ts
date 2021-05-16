import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from '@angular/common/http';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with jwt token if available
        let jwtToken = JSON.parse(localStorage.getItem('jwtToken') || '{}');
        if (jwtToken) {
            request = request.clone({
                setHeaders: {
                    Authorization: `${jwtToken}`
                }
            });
        }
        return next.handle(request);
    }
}