import {Component, Input, OnInit} from '@angular/core';
import {Product} from '../product.model';

/**
 * @ProductDepartment: A component to show the breadcrumbs to a
 * Product's department
 */
@Component({
  selector: 'app-product-department',
  templateUrl: './product-department.component.html',
  styleUrls: ['./product-department.component.css']
})
export class ProductDepartmentComponent implements OnInit {
  @Input product: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
