import {Injectable} from '@angular/core';
import {Product, ProductService} from "./product.service";
import {LoggerService} from "app/shared/logger.service";

@Injectable()
export class AnotherProductService implements ProductService {
  constructor(public logger: LoggerService) {
  }

  getProduct(): Product {
    return new Product(2, "华为p10", 8888, "ninininini")
  }

}
