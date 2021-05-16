
import { Injectable, Inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
    
    constructor(
        private http: HttpClient,
        @Inject('BASE_API_URL') private _baseApiUrl: string
    ) {}
    
    login(username: string, password: string): void {
       this.http.post(this._baseApiUrl + '/login_check', { username, password })
            .pipe(
                map(response => {
                    // login successful if there's a jwt token in the response
                    if (response) {
                        localStorage.setItem('JwtToken', JSON.stringify(response));
                    }
                })
            );
    }
}