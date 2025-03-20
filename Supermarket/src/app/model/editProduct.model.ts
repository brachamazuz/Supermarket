export class EditProductModel {
    constructor(
        
        public productId: number,
        public Image_path: string,
        public productName: string,
        public price: number,
        public categoryID: number,
    ) { }
}