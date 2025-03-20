import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemList : any=[] //המוצרים בעגלה
  //BehaviorSubject = וריאנט של נושא הדורש ערך התחלתי ופולט את הערך הנוכחי שלו בכל פעם שהוא מנוי
  public productList = new BehaviorSubject<any>([]);
  public search = new      BehaviorSubject<string>("");

  constructor() { 

  }
  getProducts(){
    return this.productList.asObservable();

  }
  //push – מוסיף אובייקט חדש לסוף המערך ומחזיר את מספר האובייקטים במערך לאחר ההוספה.
  setProduct(product : any){
    this.cartItemList.push(...product)
    this.productList.next(product);
    // localStorage.setItem("productList", JSON.stringify(this.cartItemList));
    console.log("ברכה");
    alert("ברכה");
    
  }

  addtoCart(product : any){
    let productToPush : {productId:string,productName:string,Image_path:string,price:string} = {
      productId : this.cartItemList.length,
      productName : product.productName,
      Image_path : product.Image_path,
      price : product.price
    };
    this.cartItemList.push(productToPush);//מוסיף את המוצרים בעגלה
    this.productList.next(this.cartItemList);
    this.getTotalPrice();
    console.log(this.cartItemList);
    localStorage.setItem("productList", JSON.stringify(this.cartItemList));
  }

  getTotalPrice() : number{
    let grandTotal = 0;
    this.cartItemList.map((a:any)=>{
      grandTotal += a.price;
      console.log("בדיקה");
    })
    return grandTotal;
  }

  removeCartItem(product: any){
    this.cartItemList.map((a:any, index:any)=>{
      if(product.productId === a.productId){
        this.cartItemList.splice(index,1);
      }
    })
    localStorage.setItem("productList",JSON.stringify(this.cartItemList));
    this.productList.next(this.cartItemList);
    
  }
  

  removeAllCart(){
    this.cartItemList =[]
    localStorage.setItem("productList",JSON.stringify(this.cartItemList));
    this.productList.next(this.cartItemList);

  }
}
