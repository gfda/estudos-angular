import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { ProductCrudComponent } from './views/product-crud/product-crud.component';
import { ProductCreateComponent } from './components/product/product-create/product-create.component';
import { NotfoundComponent } from './views/notfound/notfound.component';
import { ProductUpdateComponent } from './components/product/product-update/product-update.component';
import { ProductDeleteComponent } from './components/product/product-delete/product-delete.component';
import { RoutesConstants } from './common/routes-constants';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  { 
    path: "",
    redirectTo: RoutesConstants.HOME_URL,
    pathMatch: "full"
  },
  {
    path: RoutesConstants.PRODUCTS_URL,
    component: ProductCrudComponent
  },
  {
    path: RoutesConstants.PRODUCTS_CREATE_URL,
    component: ProductCreateComponent
  },
  {
    path: RoutesConstants.PRODUCTS_UPDATE_URL,
    component: ProductUpdateComponent
  },
  {
    path: RoutesConstants.PRODUCTS_DELETE_URL,
    component: ProductDeleteComponent
  },
  {
    path: '**',
    component: NotfoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
