import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { IUser } from 'src/app/interfaces/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth-rest-api',
  templateUrl: './auth-rest-api.component.html',
  styleUrls: ['./auth-rest-api.component.css']
})
export class AuthRestApiComponent implements OnInit {

  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private _baseApiUrl: string
  ) { }

  ngOnInit(): void {
  }

  public getUser(email: string, password: string): Observable<IUser> {
    return this.http.post<IUser>(this._baseApiUrl + 'auth/login', { email: email, password: password });
  }

  public register(): Observable<IUser> {
    return this.http.post<IUser>(this._baseApiUrl + 'auth/register', { 'email': 'test2@example.com', 'password': '123123' });
  }

}
