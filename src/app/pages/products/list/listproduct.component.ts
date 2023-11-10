import {Component, OnInit} from '@angular/core';
import {ProductService} from "../../../services/product/product.service";
import {Product} from "../../../models/product.model";

@Component({
  selector: 'app-list',
  templateUrl: './listproduct.component.html',
  styleUrls: ['./listproduct.component.scss']
})
export class ListProductComponent implements OnInit {

  products$?: Promise<Product[]>;

  constructor(private productService: ProductService) {

  }

  ngOnInit() {
    this.products$ = this.productService.getAll();
  }
}
