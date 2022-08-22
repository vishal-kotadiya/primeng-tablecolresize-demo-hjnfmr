import { Component, OnInit } from '@angular/core';
import { ProductService } from './productservice';
import { CustomerService } from './customerservice';
import { Customer } from './customer';
import { Product } from './product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  products: Product[];
  test =
    'fkdljdkjdkljdklfjdklfjdklfjdlfjfkldjfkldjflsdjfkldjfkldfjdklfjdklfjdklfjdfdjfkdjfjfk';
  customers: Customer[];

  constructor(
    private productService: ProductService,
    private customerService: CustomerService
  ) {}

  ngOnInit() {
    this.productService
      .getProductsSmall()
      .then((data) => (this.products = data));
    this.customerService
      .getCustomersLarge()
      .then((customers) => (this.customers = customers));
  }
}
