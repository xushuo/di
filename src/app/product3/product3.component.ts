import {Component, Injector, OnInit} from '@angular/core';
import {Product, ProductService} from "../shared/product.service";

@Component({
  selector: 'app-product3',
  templateUrl: './product3.component.html',
  styleUrls: ['./product3.component.css']
})
export class Product3Component implements OnInit {
  private productService:ProductService   //手工注入 不推荐
  product :Product;
  constructor(private injector:Injector) {
    this.productService = injector.get(ProductService);
  }

  ngOnInit() {
    this.product=this.productService.getProduct();
  }

}
