import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { EditProductModel } from './model/editProduct.model';
import { tap } from 'rxjs/operators'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AdminService {

  public urlAdmin: string = "http://localhost:4000/admin";
  productUpdated = new EventEmitter<EditProductModel>();
  constructor(private http: HttpClient) { }

  addproduct(empObj: any) {
    console.log(empObj);
    return this.http.post<any>(this.urlAdmin + '/addProduct', empObj);
  }
  update(id:number, name:string, price:number, pic: string ): Observable<EditProductModel> {
    console.log("updatedProduct");
    return this.http.put<EditProductModel>(`${this.urlAdmin}/${id}`,{productName : name, price : price, Image_path : pic})
    .pipe(tap((value)=>{
      console.log("log");
      this.productUpdated.emit(value);
    }));
    
  }


}

