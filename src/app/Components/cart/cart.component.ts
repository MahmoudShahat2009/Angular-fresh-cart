import { CartService } from './../../service/cart.service';

import { Component, OnInit, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {

  constructor(private _CartService:CartService,  private _Renderer2:Renderer2){}

  cartShop:any = {}


  ngOnInit(): void {
    this._CartService.getCartUser().subscribe({
      next:(respons)=>{
            console.log(respons.data);
            this.cartShop = respons.data
     }
    });
  };
  removeItem(id:string):void{
    this._CartService.deletCart(id).subscribe({
      next:(respons)=>{
        console.log(respons);
        this.cartShop = respons.data
      }
    })
  };
  updateCount(id:string, count:number, el1:HTMLButtonElement, el2:HTMLButtonElement ):void{

    if(count>= 1){

      this._Renderer2.setAttribute(el1, 'disabled', 'true' ),
      this._Renderer2.setAttribute(el2, 'disabled', 'true' ),

      this._CartService.updataQuantity(id, count,).subscribe({
        next:(respons)=>{
        console.log(respons);
        this.cartShop = respons.data
        this._Renderer2.removeAttribute(el1 , 'disabled')
        this._Renderer2.removeAttribute(el2 , 'disabled')
        },
        error:(err)=>{
          this._Renderer2.removeAttribute(el1 , 'disabled')
        this._Renderer2.removeAttribute(el2 , 'disabled')
        }
      })
    }

  }


}
