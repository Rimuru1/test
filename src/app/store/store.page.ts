/// <reference types="@types/bingmaps" />

import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { HttpClient } from '@angular/common/http';

  

@Component({
  selector: 'app-store',
  templateUrl: './store.page.html',
  styleUrls: ['./store.page.scss'],
})
export class StorePage implements OnInit {
  allProduct: any[] = []
  userStore: any = []
  showUserData = {
    "fnames": localStorage.getItem("fnames"),
    "lname": localStorage.getItem("lname"),
    "email": localStorage.getItem("email"),
    "address": localStorage.getItem("address"),
    "type": localStorage.getItem("type"),

  }
  pin1 = localStorage.getItem("pin1")
  pin2 = localStorage.getItem("pin2")

  useremail = localStorage.getItem("Uemail")
  Emails:any [] = []

  constructor(
    private http: HttpClient,
    private service: ServiceService,
    
  ) { }



  store1(){
console.log('1234')
    this.http.get<any>('http://localhost:3000/userstore/'+this.useremail).subscribe(res =>{
      this.Emails = res;
      console.log(this.Emails)
    })

  }
  ProductStore() {
    console.log('4321')
    this.service.SearchProductStore().subscribe(
      res => { 
        var data = JSON.stringify(res)
        var jsonData = JSON.parse(data)
        this.allProduct = jsonData
  
  
        })
  }
  
  UserStore(email){
    console.log(email)
  }

  ngOnInit() {
    this.store1();
    this.ProductStore();
    
  }
  
  GetMap(pin1,pin2){
    console.log(pin1)
    console.log(pin2)
    var map = new Microsoft.Maps.Map('#myMap', {
      credentials: 'AiGDmosZuT1LtMmTjkPoctTigaJw-O5TGgpXPEhH6mElZFyS31dhQo8UjPz5NEe7',
      center : new Microsoft.Maps.Location(pin1,pin2)
    });
    var center = map.getCenter();
     var infobox = new Microsoft.Maps.Infobox(center, { title: '12345', 
      description: 'TreeProduct' });
  infobox.setMap(map);
  }
}
