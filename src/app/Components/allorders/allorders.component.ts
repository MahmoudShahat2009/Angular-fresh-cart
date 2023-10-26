import { CartService } from './../../service/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-allorders',
  templateUrl: './allorders.component.html',
  styleUrls: ['./allorders.component.scss']
})
export class AllordersComponent implements OnInit{
  constructor(private _CartService:CartService ){}
  allorders:any = []

  ngOnInit(): void{

    this._CartService.allorders().subscribe({
      next:(respons)=>{
        console.log(respons.data[0].cartItems);
        this.allorders = respons.data

      }
    })

  }
}
