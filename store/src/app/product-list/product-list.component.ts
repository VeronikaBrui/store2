import { ApiService, Product } from './../api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  product = new Product(0,"",0,"",""); 
  products: Product[];

  constructor(private ApiService:ApiService) { }

  ngOnInit(): void {

    this.getProducts()

  }
  getProducts() {
    this.ApiService.getProducts().subscribe((data) => {
      console.log(data)
      this.products=data;
    });
  }

 addProduct() {
   this.ApiService.addProduct(this.product).subscribe((data) => {
     console.log(data);
     this.getProducts();
   });
 }
 
 deleteProduct(){
  this.ApiService.deleteProduct(this.product).subscribe((data) =>  {
    console.log(data);
    this.getProducts();
  });
 }

 updateProduct(){
   this.ApiService.updateProduct(this.product).subscribe((data) =>  {
     console.log(data);
     this.getProducts();
   });
 }

}
