import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  products=[]

  baseURL: string = 'http://localhost:3000/';
  headers = { 'content-type':'application/json' };
  constructor(private http: HttpClient) {
    //let json=JSON.stringify(this.products);
    //console.log(json);
  }


  getProducts(): Observable<any> {
    return this.http.get(this.baseURL + 'products')
  }

  addProduct(product: Product): Observable<any> {
    let body = JSON.stringify(product);
    return this.http.post(this.baseURL + 'products', body, {
    headers: this.headers,
    });
  }

  updateProduct(product: Product): Observable<any> {
    let body = JSON.stringify(product);
    return this.http.put(this.baseURL + 'products/' + product.id, body, {
    headers: this.headers, 
    });
    }

   deleteProduct(product: Product): Observable<any> {
      return this.http.delete(this.baseURL + 'products/' + product.id);
      }
    

}



  // getProducts(): Observable<any> {
  //   return this.http.get(this.baseURL + 'productsList');
  //   }


  // constructor() { }
  
  // productList = [
  //   new Product (2536, "Sony Professional, 32 GB XQD", 500, "Storage", "The new XQD cards achieve Max read" ),
  //   new Product (2537, "Lenovo Legion 15.6 Gaming", 4228, "Laptops", "Lenovo Legion 5 pairs unparalleled flexibility with incredible power, offering a plethora of performance options for any gamer in a clean and minimalist design" ),
  //   new Product (2538, "ASUS ROG GL55VW - DH71 15,6", 5300, "Laptops", "Offering a formidable core experience for serious gaming and multitasking on Windows 10 Pro" ),
  //   new Product (2539, "Razer BlackWidow V3 Chroma RGB", 439, "Keyboards", "Experience one of the most iconic mechanical gaming keyboards with the Razer BlackWidow" ),
  //   new Product (2540, "Microsoft Surface Pro 7.0", 5400, "Laptops", "New Surface Pro 7 adapts to the way you work with laptop-to-tablet versatility" ),

  //   ]

    // getProducts(): Observable <any>{
    //   let obs = new Observable ((observer) => {
    //     let t=0;
    //     for (let Product of this.productList ){
    //       setTimeout(() => { 
    //         observer.next(Product)
    //       }, t);
    //       t+=5000;
    //     }  
    //   })
    //   return obs;
    // }
  

export class Product {
  public id: number;
  public name: string;
  public price :number;
  public category: string;
  public description: string;
 
 constructor(
 id: number,
 name: string,
 price :number,
 category: string,
 description: string
 ) 
 {
   this.id=id;
   this.name = name;
   this.price = price;
   this.category = category;
   this.description = description;
 }
}