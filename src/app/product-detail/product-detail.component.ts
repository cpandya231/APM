import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { IProduct } from '../product-list/Product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  productId: number;
  product:IProduct;
  pageTitle:string="Product Details"
  constructor(private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService) { }

  ngOnInit() {
    this.productId = +this.route.snapshot.paramMap.get('id');
    this.productService.getProduct(this.productId).subscribe(
      product => {
        console.log(product.productName);
        this.product=product;
      }
    )
  }
  onBack() {
    this.router.navigate(['products'])
  }

}
