import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import {FormsModule} from '@angular/forms';
import { FilterStringPipe } from './filter-string.pipe';
import { AppStarComponent } from './app-star/app-star.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    FilterStringPipe,
    AppStarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
