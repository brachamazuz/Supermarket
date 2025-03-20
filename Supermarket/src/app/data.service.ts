import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  public URL: string =      "http://localhost:4000/entity";

  constructor(private http: HttpClient) { }

  signUp(empObj: any) {
    console.log(empObj);
        return this.http.post<any>(this.URL + '/register', empObj)
  }

  login(empObj: any) {
    // return this.http.post<any>(`${this.URL}/login`,empObj)
    return this.http.post<any>(this.URL + '/login', empObj)  //.toPromise()

  }
  getProduct() {
    return this.http.get<any>(this.URL + '/product')
      .pipe(map((res: any) => {
        return res;
      }))
  }

  orderCount() {
    return this.http.get(this.URL + '/orderCount');
  }

  productCount() {
    return this.http.get(this.URL + 'productCount');
  }


}
