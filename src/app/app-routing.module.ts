import { SigninComponent } from './components/signin/signin.component';
import { SignupComponent } from './components/signup/signup.component';
import { PrivateProductsComponent } from './components/private-products/private-products.component';
import { ProductsComponent } from './components/products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

//Components


const routes: Routes = [
  { path: '', redirectTo: "/products", pathMatch: 'full' },
  { path: 'products', component: ProductsComponent },
  { path: 'private', component: PrivateProductsComponent },
  { path: 'singup', component: SignupComponent },
  { path: 'signin', component: SigninComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
