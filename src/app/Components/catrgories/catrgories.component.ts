import { ProductsService } from './../../service/products.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-catrgories',
  templateUrl: './catrgories.component.html',
  styleUrls: ['./catrgories.component.scss']
})
export class CatrgoriesComponent implements OnInit {

constructor(private _ProductsService:ProductsService){}

allCategories:any = []

  ngOnInit(): void {
      this._ProductsService.getCategories().subscribe({
        next:(respons)=>{
          console.log(respons.data);
          this.allCategories=respons.data
          
        }
      })
  }

}
