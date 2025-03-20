export class ProductModel {


  public Image_path !: FileList;
  public productName !: string;
  public productPrice !: number;
  public categoryID !: number;


  // static convertToFormData(product: ProductModel) {
  //     const fd = new FormData();
  //     fd.append("protectedId", product.protectedId.toString());
  //     fd.append("productName", product.productName);
  //     fd.append("ProductPrice", product.ProductPrice.toString());

  //     if (product.image)
  //       //  fd.append("image", product.image.item(0));
  //     return fd;
  // }
}
