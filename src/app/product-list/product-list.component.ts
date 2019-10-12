import { Component, OnInit } from '@angular/core';
import { IProduct } from './Product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  showImage: boolean = false;
  pageTitle: string = "Product List";
  changableTitle: string;
  imageWidth = 50;
  imageMargin = 2;

  products: IProduct[];

  filteredProducts: IProduct[] = [];
  private _filteredString;
  errorMessage: string;

  constructor(private productService: ProductService) {
  }

  public get filteredString() {
    return this._filteredString;
  }
  public set filteredString(value) {
    this._filteredString = value;
    this.filteredProducts =
      this._filteredString ? this.filterProducts(this._filteredString) : this.products;

  }



  private filterProducts(value) {
    value = value.toLocaleLowerCase();
    return this.products.filter(
      (product: IProduct) => product.productName.toLocaleLowerCase().indexOf(value) !== -1)
  }

  ngOnInit() {
    console.log("In ngOnInit");
    this.productService.getProducts().subscribe({
      next: value => {
        this.products = value;
        this.filteredProducts = this.products;
      },
      error:error=>{
        this.errorMessage=error;
        console.log(this.errorMessage)
      }
    }
    );

  }

  toggleImage(): void {
    this.showImage = !this.showImage
  }

  eventOccured(value): void {
    this.pageTitle += " " + value;
  }
}
