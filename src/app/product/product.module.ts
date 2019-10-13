import { NgModule } from '@angular/core';
import { FilterStringPipe } from '../filter-string.pipe';
import { ProductDetailComponent } from '../product-detail/product-detail.component';
import { ProductListComponent } from '../product-list/product-list.component';
import { SharedModule } from '../shared/shared.module';
import { ProductRoutingModule } from './product-routing.module';




@NgModule({
  declarations: [
    ProductListComponent,
    FilterStringPipe,
    ProductDetailComponent
    
  ],
  imports: [
    SharedModule,
    ProductRoutingModule,
    
  ]
})
export class ProductModule { }
