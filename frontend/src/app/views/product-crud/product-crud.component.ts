import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';
@Component({
  selector: 'app-product-crud',
  templateUrl: './product-crud.component.html',
  styleUrls: ['./product-crud.component.css']
})
export class ProductCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Beer Registration',
      icon: 'sports_bar',
      routeUrl: '/products'
    }
  }

  ngOnInit(): void {
  }

  navegateToProductCreate(): void {
    this.router.navigate(['/products/create'])
  }
}
