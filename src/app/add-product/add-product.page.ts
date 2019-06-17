import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.page.html',
  styleUrls: ['./add-product.page.scss'],
})
export class AddProductPage implements OnInit {
  productData = {}

  constructor(
    private product: ServiceService,
    private _router: Router
  ) { }

  addProduct() {
    this.product.addProducts(this.productData)
      .subscribe(
        res => { 
        console.log(res)
        localStorage.getItem('token',)
        this._router.navigateByUrl('/store')
        },
        err => console.log(err)
      )
  }
  ngOnInit() {
  }

}
