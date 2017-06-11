import {Component, OnInit} from '@angular/core';

/**
 * @PriceDisplay: A component to show the price of a
 * Product
 */
@Component({
  selector: 'app-price-display',
  templateUrl: './price-display.component.html',
  styleUrls: ['./price-display.component.css']
})
export class PriceDisplayComponent implements OnInit {
  price: number;

  constructor() {
  }

  ngOnInit() {
  }

}
