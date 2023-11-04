import { CartService } from './../../service/cart.service';
import { ProductsService } from './../../service/products.service';
import { Component,  OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {
constructor
(  private _ActivatedRoute:ActivatedRoute,
   private _ProductsService:ProductsService,
   private _CartService:CartService,
   private _ToastrService:ToastrService){}

productId:any;

prodauctIdData:any={};


ngOnInit(): void {
 this._ActivatedRoute.paramMap.subscribe({
  next:(params)=>{
   this.productId = params.get('id');
   console.log(params.get('id'));

  }
 });
this._ProductsService.getproductsId(this.productId).subscribe({
  next:(respons)=>{
console.log(respons.data);
this.prodauctIdData = respons.data

  }
});
}
addProduct(id:string):void{
  this._CartService.addToCart(id).subscribe({
    next:(respons)=>{
      console.log(respons);
      this._ToastrService.success(respons.message)
    }
  })

}

detailsSlaider: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  navText: ['', ''],
 items:1,
 autoplay:true,
  nav: false
}

}
