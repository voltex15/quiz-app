import { Component, OnInit, Inject } from '@angular/core';
import { Observable } from 'rxjs';
import { ICategory } from 'src/app/interfaces/category';
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
    this.getCategories().subscribe(val => console.log(val));
  }

  public getCategories(): Observable<ICategory> {
    return this.http.get<ICategory>(this._baseApiUrl + 'test');
  }

}
