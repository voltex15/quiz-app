
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { IUser } from 'src/app/interfaces/user';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    
    constructor(
        private http: HttpClient,
        @Inject('BASE_API_URL') private _baseApiUrl: string
    ) {}
    
    public login(username: string, password: string): void {
        this.getUser(username, password).subscribe(response => {
            localStorage.setItem('jwtToken', JSON.stringify(response.token));
            localStorage.setItem('username', JSON.stringify(response.email));
        });
    }

    public register(username: string, password: string): void {
        this.getUser(username, password).subscribe(response => {
            console.log(response.email);
            console.log(response.token);
        });
    }

    public getUser(email: string, password: string): Observable<IUser> {
        return this.http.post<IUser>(this._baseApiUrl + 'auth/login', { email: email, password: password });
    }
    
    public postUser(email: string, password: string): Observable<IUser> {
        return this.http.post<IUser>(this._baseApiUrl + 'auth/register', { email: email, password: password });
    }
    
}