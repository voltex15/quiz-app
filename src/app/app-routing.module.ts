import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryRestApiComponent } from './rest-api/category-rest-api/category-rest-api.component';

const routes: Routes = [
  { path: 'categoryRest', component: CategoryRestApiComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
