import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {
    private url: string;
    private isAdmin: boolean;
    private coco(){
      this.isAdmin = !this.isAdmin;
    }

  constructor() {
    this.url = 'https://www.ecosia.org/';
    this.isAdmin = false;
  }

  ngOnInit() {
  }

}
