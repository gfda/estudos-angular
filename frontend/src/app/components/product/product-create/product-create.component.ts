import { ProductService } from '../product.service';

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Product } from '../product.model';
import { GlobalConstants } from 'src/app/common/global-constants';
import { RoutesConstants } from 'src/app/common/routes-constants';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {
  
  public product: Product

  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
  }
  
  createProduct(): void {
      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessage(GlobalConstants.ADD_SUCCESS_MSG)
        this.router.navigate([RoutesConstants.PRODUCTS_URL])
      })
  }

  cancel(): void {
    this.router.navigate([RoutesConstants.PRODUCTS_URL])
  }
}
