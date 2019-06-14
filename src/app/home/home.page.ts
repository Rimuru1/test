import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
  user: firebase.User;
  loginUserData = {}
  allProduct: any[] = []
  product = {}

  constructor(
    private service: ServiceService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  
logoutGoogle(){
  console.log("logout...");
  this.service.logout();
}
searchproduct() {
  this.service.SearchProduct().subscribe(
    res => { 
      var data = JSON.stringify(res)
      var jsonData = JSON.parse(data)
      this.allProduct = jsonData
      // console.log(jsonData[1].productName)
      // console.log()

      
      // for (let i = 1; i < jsonData.length; i++) {
      
      //   localStorage.setItem("ProductName", jsonData[i].productName)
      //   localStorage.setItem("Type", jsonData[i].type)
      //   localStorage.setItem("Price", jsonData[i].price)
      //   localStorage.setItem("Img", jsonData[i].imgUrl)
        
      //   console.log(jsonData[i])

      })
}
}
