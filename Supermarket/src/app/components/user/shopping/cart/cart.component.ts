import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  imageUrl = "http://localhost:4000/entity/images/";

 public products : any =[];
 public grandTotal !: number;
  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      // console.log(res);
      this.products = res;
      // let tempList = localStorage.getItem("productList");
      // if(tempList){
      //   tempList = JSON.parse(tempList);
      //   if(!this.products && tempList){
      //     this.products = tempList;
      //   }
      // }
      this.grandTotal = this.cartService.getTotalPrice();
    })
  }

  removeItem(item: any){
    this.cartService.removeCartItem(item);
  }
  emptycart(){
    this.cartService.removeAllCart();
  }

}
