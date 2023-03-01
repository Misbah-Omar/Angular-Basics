import { Component } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products = [
    {id:1, name: 'Minimalists Analog Watch', price: '109', color: 'Black', available: 'Available', Image: '/assets/products/Minimalists Analog Watch.jpg'},
    {id:2, name: 'Hisense Ultra HD Smart TV', price: '3339', color: 'Black', available: 'Available', Image: '/assets/products/Hisense Ultra HD Smart TV.jpg'},
    {id:3, name: 'Apple iPhone 12', price: '1885', color: 'Black', available: 'Not Available', Image: '/assets/products/Apple iPhone 12.jpg'},
    {id:4, name: 'LG Fully Automatic Washing Machine', price: '1765', color: 'White', available: 'Available', Image: '/assets/products/LG Fully Automatic Washing Machine.avif'},
    {id:5, name: 'LG Refridgerator with Door Cooling', price: '2815', color: 'White', available: 'Not Available', Image: '/assets/products/LG Refridgerator with Door Cooling.avif'},
    {id:6, name: 'DELL Inspiron One 27 Ryzen 7', price: '2145', color: 'White', available: 'Available', Image: '/assets/products/DELL Inspiron One 27 Ryzen 7.jpg'}

  ];

  getTotalProducts(){
    return this.products.length;
  }
  getTotalAvailable(){
    return this.products.filter(product => product.available === 'Available').length;
  }
  getTotalNotAvailable(){
    return this.products.filter(product => product.available === 'Not Available').length;
  }

  productCountRadioButton: string = 'All';

  onFilterRadioButtonChanged(data: string){
    this.productCountRadioButton = data;
    // console.log(this.productCountRadioButton)
  }


}
