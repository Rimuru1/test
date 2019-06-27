import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';

@Component({
  selector: 'app-basket',
  templateUrl: './basket.page.html',
  styleUrls: ['./basket.page.scss'],
})
export class BasketPage implements OnInit {
  user: firebase.User;
  allProduct: any[] = []
  showUserData = {
    "fnames": localStorage.getItem("fnames"),
    "lname": localStorage.getItem("lname"),
    "email": localStorage.getItem("email"),
    "address": localStorage.getItem("address"),
    "type": localStorage.getItem("type"),

  }

  constructor(
    private service: ServiceService
  ) { }

  ngOnInit() {
    console.log()
    this.service.getProductBasket().subscribe(
      res => { 
        var data = JSON.stringify(res)
        var jsonData = JSON.parse(data)
        this.allProduct = jsonData
  
        })
  
  }
  deleteproduct(id) {
    console.log(id)
    this.service.deleteProductBasket(id).subscribe(
      res => { 
        console.log(res)
        })
      }

}
