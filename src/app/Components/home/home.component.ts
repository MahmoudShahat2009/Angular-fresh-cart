import { CartService } from './../../service/cart.service';
import { ProductsService } from './../../service/products.service';
import { Component, OnInit } from '@angular/core';
import { OwlOptions  } from 'ngx-owl-carousel-o';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(private _ProductsService:ProductsService, private _CartService:CartService, private _ToastrService:ToastrService ){}


  productData:any[]= [];
  Categories:any[]=[];

ngOnInit(): void {
    this._ProductsService.getproducts().subscribe({
      next:(respons)=>{
        console.log(respons.data);
        this.productData = respons.data
      },
    error:(err)=>{
      console.log(err);
    }
    });

    this._ProductsService.getCategories().subscribe({
      next:(respons)=>{
        console.log(respons.data);
        this.Categories = respons.data
      }
    })



};
addProduct(id:string):void{
  this._CartService.addToCart(id).subscribe({
    next:(respons)=>{
      console.log(respons);
      this._ToastrService.success(respons.message)

    }
  })

}



customOptions: OwlOptions = {
  loop: true,
  mouseDrag: true,
  touchDrag: true,
  pullDrag: false,
  dots: true,
  navSpeed: 700,
  autoplay:true,
  navText: ['', ''],
  responsive: {
    0: {
      items: 1
    },
    400: {
      items: 2
    },
    740: {
      items: 3
    },
    940: {
      items: 4
    }
  },
  nav: false
};
mainSlaider: OwlOptions = {
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
};

}


