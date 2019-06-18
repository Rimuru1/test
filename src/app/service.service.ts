import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private _loginUrl = "http://localhost:3000/login";
  private _registerUel = "http://localhost:3000/register";
  private _stroeUrl = "http://localhost:3000/stroe";
  private _productUrl ="http://localhost:3000/product";
  private _loginStoreUrl = "http://localhost:3000/loginstore";
  private getProductByemail = localStorage.getItem("email")
  private _myProductUrl = "http://localhost:3000/product/"+this.getProductByemail;
  private port = 'http://localhost:3000/product/';
  // private _myProductUrl = this.port+this.getProductByemail;

  constructor(
    private afAuth: AngularFireAuth,
    private http: HttpClient,
    private router: Router
    
  ) { }
  login() {
    console.log('Redirecting to google login provider')
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider());
  }
  loginFaceBooks(){
    console.log('Redirecting to facebook login provider')
    this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider());
  }

  logout() {
    console.log('logouting..')
    this.afAuth.auth.signOut()
  }
  getLoggedInUser() {
    return this.afAuth.authState;
  }
  loginuser(user){
    return this.http.post<any>(this._loginUrl, user)
  }
  registerUser(user){
    return this.http.post<any>(this._registerUel, user)
  }
  loginstore(store){
    return this.http.post<any>(this._loginStoreUrl, store)
  }
  createStroe(stroe){
    return this.http.post<any>(this._stroeUrl, stroe)
  }
  addProducts(product){
    return this.http.post<any>(this._productUrl, product)
  }
  SearchProduct(){
    
    return this.http.get<any>(this._productUrl)
}
SearchMyproduct(email){
  console.log(email)
  
  return this.http.get(this._myProductUrl, email)
}
  logoutUser(){
    localStorage.clear()
    this.router.navigate(['/'])
  }
  loggedIn(){
    return !!localStorage.getItem('token')
  }
  getToken() {
    return localStorage.getItem('fname')
  }
}
