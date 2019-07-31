import { Component, OnInit } from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.scss']
})
export class ProductCreateComponent implements OnInit {

  public product: Product;
  constructor() {
    this.product = new Product();
  }

  ngOnInit() {
  }

}
