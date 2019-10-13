import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductDetailsGuard } from './product-detail/product-details.guard';


const routes: Routes = [
  {path:"products",component:ProductListComponent},
  {path:"welcome",component:WelcomeComponent},
  {path:"products/:id",component:ProductDetailComponent,canActivate:[ProductDetailsGuard]},
  {path:"",redirectTo:"welcome",pathMatch:'full'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
