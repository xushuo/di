import { Injectable } from '@angular/core';
import {LoggerService} from "./logger.service";

@Injectable()
export class ProductService {

  constructor(public logger:LoggerService) { }

  getProduct():Product{
    this.logger.log("log方法被调用");
    return new Product(1,"小米123",666,"哈哈哈哈哈")
  }
}
export class Product {
  constructor(
    public id:number,
    public title:string,
    public  price:number,
    public  desc:string
  ){
  }
}
