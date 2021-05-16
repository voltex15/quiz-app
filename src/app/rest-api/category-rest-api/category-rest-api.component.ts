import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category';
import { IUser } from 'src/app/interfaces/user';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-category-rest-api',
  templateUrl: './category-rest-api.component.html',
  styleUrls: ['./category-rest-api.component.css']
})
export class CategoryRestApiComponent implements OnInit {

  constructor(
    private http: HttpClient,
    @Inject('BASE_API_URL') private _baseApiUrl: string
  ) { }

  ngOnInit(): void {
    //test
    this.getUser().subscribe(response => {
      console.log(response.token)
      localStorage.setItem('JwtToken', JSON.stringify(response.token));
    });
  }

  public click() {
    this.getCategories().subscribe(val => console.log(val));
  }

  public click2() {
    this.getCategories2().subscribe(val => console.log(val));
  }

  public getCategories(): Observable<ICategory> {
    return this.http.get<ICategory>(this._baseApiUrl + 'api/test');
  }

  public getCategories2(): Observable<ICategory> {
    return this.http.get<ICategory>(this._baseApiUrl + 'test');
  }

  public getUser(): Observable<IUser> {
    return this.http.post<IUser>(this._baseApiUrl + 'auth/login', { email: 'test@example.com', password: '123123' });
  }

  public register(): Observable<IUser> {
    return this.http.post<IUser>(this._baseApiUrl + 'auth/register', { 'email': 'test2@example.com', 'password': '123123' });
  }

}
