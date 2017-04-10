import {Component, OnInit} from '@angular/core';
import {IProduct} from './product';

@Component({

    selector: 'pm-products',
    moduleId: module.id,
    templateUrl: 'product-list.component.html',
    styleUrls: ['product-list.component.css']

})

export class ProductListComponent implements OnInit{
    pageTitle: string ='Product List';
    imageWidth: number = 50;
    imageMargin: number = 2;
    showImage: boolean = false;
    listFilter: string = 'cart';
    products: IProduct[] = [

    {
        "productId": 2,
        "productName": "Garden Cart",
        "productCode": "GDN-0023",
        "releaseDate": "March 18, 2016",
        "description": "15 gallon capacity rolling garden cart",
        "price": 32.99,
        "starRating": 4.2,
        "imageUrl": "https://akamai1.truition.com/images/catalog16754/folder105286/img11922194med.jpg"
    },
    {
        "productId": 5,
        "productName": "Hammer",
        "productCode": "TBX-0048",
        "releaseDate": "May 21, 2016",
        "description": "Curved claw steel hammer",
        "price": 8.9,
        "starRating": 4.8,
        "imageUrl": "https://www.orschelnfarmhome.com/images/catalog16754/folder105286/img11774975med.jpg"
    }

    ];

    toggleImage(): void {

        this.showImage = !this.showImage;
    }

    ngOnInit() : void{

        console.log('In OnInit');
    }
}