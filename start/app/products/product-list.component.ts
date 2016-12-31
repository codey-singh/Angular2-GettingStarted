import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

//metadata
@Component({
    selector:'pm-products',
    moduleId: module.id,
    templateUrl:'product-list.component.html',
    styleUrls: ['product-list.component.css']
})
export class ProductListComponent implements OnInit{
    imageWidth: number = 50;
    pageTitle : string = 'Product List';
    showImage : boolean = false;
    listFilter : string ;
    products: IProduct[];
    
    constructor( private _productService: ProductService ){  }

    ngOnInit(): void{
        this.products = this._productService.getProducts();
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
}