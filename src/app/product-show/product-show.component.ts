import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../model/product';

@Component({
  selector: 'app-product-show',
  templateUrl: './product-show.component.html',
  styleUrls: ['./product-show.component.scss']
})
export class ProductShowComponent implements OnInit {

  @Input() product: Product;
  @Output() voted: EventEmitter<number>;
  constructor() {
      this.voted = new EventEmitter<number>();
  }
  ngOnInit() {
  }

  public handleVote(note: number) {
    this.voted.emit(note);
  }
}
