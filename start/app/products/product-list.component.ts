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
    errorMessage : string;
    
    constructor( private _productService: ProductService ){  }

    ngOnInit(): void{
        this._productService.getProducts()
            .subscribe( (data) => this.products = data,
                    error => this.errorMessage = error);
    }

    toggleImage(): void{
        this.showImage = !this.showImage;
    }
}