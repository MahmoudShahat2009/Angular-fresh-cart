import { ToastrService } from 'ngx-toastr';
import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
constructor(private _CartService:CartService, private _ToastrService:ToastrService){}
wishList:any = {}

ngOnInit(): void {
    this._CartService.getWishLIst().subscribe({
      next:(respons)=>{
        console.log('wish' ,respons);
        this.wishList = respons.data
        this._CartService.wishListNum.next(respons.count)
      }
    })
}

addProduct(id:string):void{
  this._CartService.addToCart(id).subscribe({
    next:(respons)=>{
      console.log(respons);
      this._ToastrService.success(respons.message)
    }
  })
}

removeItem(id:string):void{
  this._CartService.deleteWishList(id).subscribe({
    next:(respons)=>{
      console.log(respons);

    }
  })
}

}



