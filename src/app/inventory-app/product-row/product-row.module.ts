import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRowComponent} from './product-row.component';

import { ProductListComponent } from '../product-list/product-list.component';
import { ProductImageComponent } from '../product-image/product-image.component';
import { ProductDepartmentComponent } from '../product-department/product-department.component';
import { PriceDisplayComponent } from '../price-display/price-display.component';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ProductRowComponent,
    ProductListComponent,
    ProductImageComponent,
    ProductDepartmentComponent,
    PriceDisplayComponent
  ],
  exports: [
    ProductRowComponent
  ]
})
export class ProductRowModule {
}
