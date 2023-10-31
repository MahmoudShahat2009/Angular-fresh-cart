import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private _HttpClient:HttpClient) { }

  cartNumber:BehaviorSubject<number> = new BehaviorSubject(0)

  myToken:any ={token:localStorage.getItem('_token')}

  addToCart(prodId:string):Observable<any> {
      return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/cart` ,
      {
        productId: prodId
      },
      {
        headers:this.myToken,
      }

    );

  }

  getCartUser():Observable<any>{
    return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/cart`,
    {
      headers:this.myToken
    }
    );
  }

  deletCart(params:string):Observable<any> {
    return this._HttpClient.delete(`https://ecommerce.routemisr.com/api/v1/cart/${params} ` ,
    {
      headers:this.myToken,
    }

  );

};

updataQuantity(id:string, countNu:number ):Observable<any>{

 return this._HttpClient.put(`https://ecommerce.routemisr.com/api/v1/cart/${id}`,
 {
  count: countNu
 },
 {
  headers:this.myToken
 }
 )
};

checkout(cart_id:string, orderDetales:object):Observable<any>{
 return this._HttpClient.post(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${cart_id}?url=http://localhost:4200` ,
 {
  shippingAddress:orderDetales,
},
{
  headers:this.myToken,
 }
 )
};
allorders():Observable<any>{
  return this._HttpClient.get(`https://ecommerce.routemisr.com/api/v1/orders/`)
}

}
