import { Component, OnInit } from '@angular/core';
import {Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product3',
  templateUrl: './product3.component.html',
  styleUrls: ['./product3.component.css']
})
export class Product3Component implements OnInit {

  product :Product;
  constructor(private productService:ProductService) { }

  ngOnInit() {
    this.product=this.productService.getProduct();
  }

}
