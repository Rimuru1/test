import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';
import { Subscriber } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  user: firebase.User;
  allProduct: any[] = []
  showUserData = {
    "fnames": localStorage.getItem("fnames"),
    "lname": localStorage.getItem("lname"),
    "email": localStorage.getItem("email"),
    "address": localStorage.getItem("address"),
    "type": localStorage.getItem("type"),

  }
  showProductData = {
    "_id":localStorage.getItem("_id")
  }
  constructor(
    private service: ServiceService,
    private router: Router
  ) { }

  ngOnInit() {
    this.service.getLoggedInUser()
    .subscribe(user =>{
      console.log(user);
      this.user = user;
    })
  }
  logoutGoogle(){
    console.log("logout...");
    this.service.logout();
    this.router.navigate(['/login'])
  }
  searchproduct() {
    this.service.SearchProduct().subscribe(
      res => { 
        var data = JSON.stringify(res)
        var jsonData = JSON.parse(data)
        this.allProduct = jsonData
  
        })
  }
  searchMyProduct() {
    console.log()
    this.service.SearchMyproduct().subscribe(
      res => { 
        var data = JSON.stringify(res)
        var jsonData = JSON.parse(data)
        this.allProduct = jsonData
  
        })
  }
  deleteproduct(id) {
    console.log(id)
    this.service.deleteProduct(id).subscribe(
      res => { 
        console.log(res)
        })
  }

}
