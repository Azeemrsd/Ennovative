import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from './layout/categories/categories.component';
import { DashboardComponent } from './layout/dashboard/dashboard.component';
import { ProductListComponent } from './layout/product-list/product-list.component';


const routes: Routes = [
  {path:'dashboard',component:DashboardComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'products',component:ProductListComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
