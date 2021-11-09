import { Component, OnInit } from '@angular/core';
import { Product } from '../product.model';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { GlobalConstants } from 'src/app/common/global-constants';
import { RoutesConstants } from 'src/app/common/routes-constants';


@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {

  public product: Product

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readById(id).subscribe(product => {
      this.product = product
    })
  }

  deleteProduct(): void {
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage(GlobalConstants.DELETE_SUCCESS_MSG)
      this.router.navigate([RoutesConstants.PRODUCTS_URL])
    })
  }

  cancel(): void {
    this.router.navigate([RoutesConstants.PRODUCTS_URL])
  }
}
