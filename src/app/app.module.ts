import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ArticleComponent } from './article/article.component';
/*
import { InventoryAppComponent } from './inventory-app/inventory-app.component';
import { ProductListComponent } from './inventory-app/product-list/product-list.component';
import { ProductImageComponent } from './inventory-app/product-image/product-image.component';
import { ProductDepartmentComponent } from './inventory-app/product-department/product-department.component';
import { PriceDisplayComponent } from './inventory-app/price-display/price-display.component';
import { ProductRowComponent } from './inventory-app/product-row/product-row.component';
*/

@NgModule({
  declarations: [
    AppComponent,
    ArticleComponent,
    /*InventoryAppComponent,
    ProductListComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent,
    ProductRowComponent*/
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
