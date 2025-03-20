import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  title = 'Supermarket';
  productsCount = 0;
  ordersCount = 0 ;

  constructor() { }

  ngOnInit(): void {
     // this.dataServic.ordersCount().subscribe(data => this.ordersCount = data.json().count);
    // this.dataService.productCount().subscribe(data => this.productsCount = data.json().count);
  }

}
