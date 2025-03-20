import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EditProductModel } from 'src/app/model/editProduct.model';
import { AdminService } from 'src/app/admin.service';

@Component({
  selector: 'app-admin-edit-product',
  templateUrl: './admin-edit-product.component.html',
  styleUrls: ['./admin-edit-product.component.css']
})
export class AdminEditProductComponent implements OnInit {


  item !: EditProductModel;
  constructor(private location: Location, private adminService: AdminService) { }

  ngOnInit(): void {
    this.item = history.state.item;
  }

  onOk() : void{
    console.log("lime 26");
    this.adminService.update(this.item.productId ,this.item.productName, this.item.price, this.item.Image_path)//, this.item
      .subscribe(() => {
        console.log("line 29");
        this.location.back();
      }
      );
  }
  onCancel() {
    this.location.back();
  }

}
