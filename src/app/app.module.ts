import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './layout/layout.component';
import { CategoriesComponent } from './layout/categories/categories.component';
import { ProductListComponent } from './layout/product-list/product-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    CategoriesComponent,
    ProductListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
