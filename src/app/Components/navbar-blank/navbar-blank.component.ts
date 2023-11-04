import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar-blank',
  templateUrl: './navbar-blank.component.html',
  styleUrls: ['./navbar-blank.component.scss']
})
export class NavbarBlankComponent implements OnInit {

constructor (private _Router:Router, private _CartService:CartService ){}

cartShownum:number = 0
showWishNum:number = 0

ngOnInit(): void {
    this._CartService.cartNumber.subscribe({
      next:(data)=>
      this.cartShownum = data

    }),

    this._CartService.getCartUser().subscribe({
      next:(respons)=>{
        this.cartShownum = respons.numOfCartItems
        console.log(this.cartShownum , "numbercart");


      }
    }),


    this._CartService.wishListNum.subscribe({
      next:(data)=>{
        console.log(data);
        this.showWishNum = data
      }
    }),
    this._CartService.getWishLIst().subscribe({
      next:(response)=>{
        this.showWishNum = response.count
      }
    })


}

  signout():void{
    localStorage.removeItem('_token');
    this._Router.navigate(['/login']);

  }

  forgetpassword():void{
    this._Router.navigate(['/forgetpassword'])
  }

  updatepassword():void{
    this._Router.navigate(['/forgetpassword'])
  }

}
