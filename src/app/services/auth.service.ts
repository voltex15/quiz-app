
import { HttpClient } from '@angular/common/http';
import { Injectable, Inject } from '@angular/core';
import { Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/user';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthService {
    private userSubject: BehaviorSubject<IUser>;
    public user: Observable<IUser>;
    
    constructor(
        private http: HttpClient,
        @Inject('BASE_API_URL') private _baseApiUrl: string,
        private router: Router,
    ) {
        this.userSubject = new BehaviorSubject<IUser>(JSON.parse(JSON.stringify((localStorage.getItem('username')))));
        this.user = this.userSubject.asObservable();
    }

    public get userValue(): IUser {
        return this.userSubject.value;
    }
    
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

    public logout(): void {
        localStorage.clear();
        this.router.navigate(['/login']);
    }

    public getUser(email: string, password: string): Observable<IUser> {
        return this.http.post<IUser>(this._baseApiUrl + 'auth/login', { email: email, password: password });
    }
    
    public postUser(email: string, password: string): Observable<IUser> {
        return this.http.post<IUser>(this._baseApiUrl + 'auth/register', { email: email, password: password });
    }
    
    public isLoggedIn(): boolean {
        return JSON.parse(JSON.stringify((localStorage.getItem('username')))) ? true : false;
    }
}