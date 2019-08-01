import { Component, OnInit } from '@angular/core';
import {CONST_PRODUCT, Product} from '../model/product';


@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

    private products: Array<Product> = CONST_PRODUCT;
    private url: string;
    private isAdmin: boolean;
    private classCss: object;
    private choosenProduct: Product;
    private averages: Array<Array<number>>;
  constructor() {
    this.url = 'https://www.ecosia.org/';
    this.isAdmin = true;
    this.changeClass();
    this.averages = [];
    this.products.forEach(elem => this.averages.push([0, 0]));
  }
  ngOnInit() {
  }
  private coco(){
    this.changeClass();
    this.isAdmin = !this.isAdmin;
  }

  private changeClass() {
      this.classCss = {
        'macouleur' : this.isAdmin,
        'jhonny' : !this.isAdmin
      }
  }
  private chooseProduct(product) {
    this.choosenProduct = product;
  }
  handleVote($event: number) {
    const productLght = this.products.length;
    let index;
    for (let i = 0 ; i < productLght ; i++) {
      if (this.choosenProduct.name === this.products[i].name){
        index = i;
        break;
      }
    }
    this.averages[index] = [this.averages[index][0] += $event , this.averages[index][1] + 1];
  }
  public getAverage(i: number) {
    if (this.averages[i][1] !== 0) {
      return this.averages[i][0] / this.averages[i][1];
    } else {
      return 0;
    }
  }
}
