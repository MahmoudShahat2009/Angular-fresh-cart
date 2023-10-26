import { ProductsService } from './../../service/products.service';

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  constructor(private _ProductsService:ProductsService){}

brandProduct:any={}


ngOnInit(): void {
    this._ProductsService.getBrands().subscribe({
      next:(respons)=>{
        console.log(respons.data);
        this.brandProduct = respons.data
      }

    })
}

}
