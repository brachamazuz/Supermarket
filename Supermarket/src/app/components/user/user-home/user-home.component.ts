import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';


@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.css']
})
export class UserHomeComponent implements OnInit {

  public totalItem : number = 0;
  // public totalItem : any = [];
  public searchTerm !: string;
   public user : any = [];
   public cartItemList: any=[];

  constructor(private cartService : CartService) { }

  ngOnInit(): void {
    this.cartService.getProducts()
    .subscribe(res=>{
      this.totalItem = res.length;
      let tempList = localStorage.getItem("productList");
      if(tempList){
        tempList = JSON.parse(tempList);
        if(!this.totalItem && tempList){
          this.totalItem = tempList.length;
        }
      }
      
      console.log(this.totalItem);
      
      
      // localStorage.setItem("totalItem", JSON.stringify({"totalItem" : res.length}));
      //localStorage.setItem("totalItem", res.length);

      // res.length = localStorage.getItem("totalItem");
      //localStorage.getItem("totalItem") == null || localStorage.getItem("totalItem") == undefined ? [] : JSON.stringify(localStorage.getItem("totalItem"));


       this.user = localStorage.getItem("loggedUserName"); 
      //  this.productList = localStorage.getItem("productList");
    })

  }
  search(event:any){
    this.searchTerm = (event.target as HTMLInputElement).value;
    console.log(this.searchTerm);
   this.cartService.search.next(this.searchTerm);
    
  }

  // addtocart(item: any) {
  //   this.cartService.addtoCart(item);
  // }

}
