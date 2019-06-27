import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
 
  
    email= localStorage.getItem("email")
    type= localStorage.getItem("type")
    productName: any
    price: any 
    imqge: any 

  

  constructor(
    private service: ServiceService,
    private _router: Router
  ) { }

  addProduct() {
    const data = {
      "email": this.email,
      "type": this.type,
      "productName": this.productName,
      "price": this.price,
      "image": this.imqge

    }
    this.service.addProducts(data)
      .subscribe(
        res => { 
        console.log(res)
        localStorage.getItem('token',)
        this._router.navigateByUrl('/tree/profile')
        },
        err => console.log(err)
      )
  }
  ngOnInit() {
  }

}
