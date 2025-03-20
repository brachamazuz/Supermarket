import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/admin.service';
import { Location } from '@angular/common';
import { DataService } from 'src/app/data.service';
import { ProductModel } from 'src/app/model/product.model';

@Component({
  selector: 'app-admin-insert-products',
  templateUrl: './admin-insert-products.component.html',
  styleUrls: ['./admin-insert-products.component.css']
})
export class AdminInsertProductsComponent implements OnInit {


  // @ViewChild('imageControl') imageControl: ElementRef;
  // newProduct: ProductModel = new ProductModel(undefined, undefined, undefined, undefined);
  public addProductForm !: FormGroup;
  public newProduct = new ProductModel();
  errors: any;
  imageVisited: boolean = false;

  constructor(private location :Location, private fb : FormBuilder, private data: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.addProductForm = this.fb.group({
      productName: ['', Validators.required],
      price: ['', Validators.required],
      image: ['', Validators.required],
      categoryID: ['', Validators.required]

    })
  }

  onAdd(): void {
    this.newProduct.productName = this.addProductForm.value.productName;
    this.newProduct.productPrice = this.addProductForm.value.price;
    this.newProduct.Image_path = this.addProductForm.value.image;
    this.newProduct.categoryID = this.addProductForm.value.categoryID;
    this.data.addproduct(this.newProduct)
    .subscribe(res=>{
      // alert(res.message);
      this.addProductForm.reset();
      this.router.navigateByUrl("/admin");
    }, err=> {
      // alert("soomething went wrong")
    })


  }
  saveImage(args: Event): void {
   // this.newProduct.image = (args.target as HTMLInputElement).files;
  }
  imageBlur(): void {
    this.imageVisited = true;
  }
  onCancel() {
    this.location.back();
  }

}
