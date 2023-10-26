import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private _HttpClient:HttpClient ) { }


  getproducts():Observable<any>{
   return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/products`)
  };

  getproductsId(id:any):Observable<any>{
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/products/${id}`)
   };

   getCategories():Observable<any>{
    return this._HttpClient.get(
      `https://ecommerce.routemisr.com/api/v1/categories`)
   };

  getBrands():Observable<any>{
    return this._HttpClient.get(
      `https://route-ecommerce.onrender.com/api/v1/brands`)
   };

}


