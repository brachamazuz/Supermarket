import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/cart.service';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  @Input() product: any;
  imageUrl = "http://localhost:4000/entity/images/";

  public productList: any;
  public filterCategory: any
  searchKey: string = "";
  constructor(private data: DataService, private cartService: CartService) { }

  ngOnInit(): void {
    this.data.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          if (a.categoryID === 1) {
            a.categoryID = "Fruits and Vegetables"
          }else if(a.categoryID === 2){
            a.categoryID = "Milk and Eggs"
          }else if(a.categoryID === 3){
            a.categoryID = "Meat and Fish"
          }else if(a.categoryID === 4){
            a.categoryID = "Wine and Drinks"
          }
          Object.assign(a, { quantity: 1, total: a.price });

        });
        console.log(this.productList);
        let tempList = localStorage.getItem("productList");
        if(tempList){
          this.cartService.cartItemList = JSON.parse(tempList);
        }

      })
    this.cartService.search.subscribe((val: any) => {
      this.searchKey = val;
    })
  }
  addtocart(item: any) {
    this.cartService.addtoCart(item);

  }
  filter(categoryID: any) {
    this.filterCategory = this.productList
      .filter((a: any) => {
        if (a.categoryID == categoryID || categoryID == 0) {
          return a;
        }
      })
  }

}
