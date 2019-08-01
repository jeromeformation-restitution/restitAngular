import {Component, DoCheck, OnInit} from '@angular/core';
import {CONST_PRODUCT, Product} from '../model/product';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-product-view-show',
  templateUrl: './product-view-show.component.html',
  styleUrls: ['./product-view-show.component.scss']
})
export class ProductViewShowComponent implements OnInit, DoCheck{

  public products: Array<Product> = CONST_PRODUCT;
  public product: Product;
  public slug: string;

  constructor(private route: ActivatedRoute, private router: Router) {
    this.slug = this.route.snapshot.paramMap.get('slug');
  }

  ngOnInit() {
    this.getProduct();
  }

  ngDoCheck(): void {
    const newSlug = this.route.snapshot.paramMap.get('slug');
    if (this.slug !== newSlug) {
      this.slug = newSlug;
      this.getProduct();
    }
  }

  public getProduct() {
    this.product = this.products.find(elem => elem.slug === this.slug);
    if (!this.product) {
      this.router.navigate(['not-found']);
    }
  }
}
