import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  private getProductByemail = localStorage.getItem("email")
  private Uemail = localStorage.getItem("Uemail")
  private _loginUrl = "http://localhost:3000/login";
  private _registerUel = "http://localhost:3000/register";
  private _stroeUrl = "http://localhost:3000/stroe";
  private _productUrl ="http://localhost:3000/product";
  private _loginStoreUrl = "http://localhost:3000/loginstore";
  private _myProductUrl = "http://localhost:3000/product/";
  private _deleteProductUrl = "http://localhost:3000/delete/myProduct/";
  private _deleteProducBaskettUrl = "http://localhost:3000/delete/productMybasket/";
  private _userUrl = "http://localhost:3000/userstore/";
  private _basketUrl = "http://localhost:3000/basket/";
  
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
SearchMyproduct(){
  return this.http.get(this._myProductUrl+this.getProductByemail)
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
  deleteProduct(id){
    return this.http.delete(encodeURI(this._deleteProductUrl + id), {responseType: 'text'})
  }
  deleteProductBasket(id){
    return this.http.delete(encodeURI(this._deleteProducBaskettUrl + id), {responseType: 'text'})
  }
  getUserStore(){
    console.log(this.Uemail+'1234')
    return this.http.get(this._userUrl+this.Uemail)
  }
  SearchProductStore(){
    return this.http.get(this._myProductUrl+this.Uemail)
  }
  clearUserStore(){
    localStorage.removeItem('Uemail')
  }
  addProductsBasket(product){
    return this.http.post<any>(this._basketUrl, product)
  }
  getProductBasket(){
    return this.http.get(this._basketUrl + this.getProductByemail )
  }

}
