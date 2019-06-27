import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user: firebase.User;
  loginUserData = {}
  storeData = {}
  constructor(
    private service: ServiceService,
    private router: Router,

  ) {}
  ngOnInit() {
    this.service.getLoggedInUser()
    .subscribe(user =>{
      console.log(user);
      this.user = user;
 
      if (this.user != null) {
        this.router.navigateByUrl('/tree');
        }  
    });
  }
  loginFacebook(){
    console.log("login facebooke...");
    this.service.loginFaceBooks()
  }
  loginGoogle() {
    console.log("login google mail...");
    this.service.login()

  }
      
  logoutGoogle() {
    console.log("logout...");
    this.service.logout();
  }
  loginUser() {
    
    this.service.loginuser(this.loginUserData).subscribe(
      res => {
        console.log(res)
        localStorage.setItem("fnames", res.fnames)
        localStorage.setItem("lname", res.lname)
        localStorage.setItem("email", res.email)
        localStorage.setItem("address",res.address)
        localStorage.setItem("type", res.type)
        localStorage.setItem("pin1", res.pin1)
        localStorage.setItem("pin2", res.pin2)
        this.router.navigate(['/tree'])
      },
      err => console.log(err)
    )
  }
  loginStore() {
    
    this.service.loginstore(this.storeData).subscribe(
      res => {
        console.log(res)
        localStorage.setItem("storeName", res.storeName)
        localStorage.setItem("email", res.email)
        localStorage.setItem("address", res.address)
        localStorage.setItem("type", res.type)
        this.router.navigate(['/tree'])
      },
      err => console.log(err)
    )
  }

}

