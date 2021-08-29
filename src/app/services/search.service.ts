import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }
  url='https://fakestoreapi.com/products/';
  selectedProduct = new Observable();
  search = new BehaviorSubject('');
  arr=[];
  //fetching data from api
  getData(){
    return this.http.get(this.url);
  }

  //setting the product to be fetched
  setSelectedData(id){
    this.selectedProduct= of(id)
  }
  //getting the product
  getSelectedData(){
    return this.selectedProduct;
  }

  //setting data to be searched
  setSearchData(key:string){
    this.search.next(key);
  }
    //getting data to be searched
  getSearchKey(){
    return  this.search;
   }
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  }

  getCart(){
    return localStorage.getItem('product')
  }
  
  addToCart(product){
    localStorage.setItem('product',product);
    this.arr.push(localStorage);
    // this.arr.push(product);
  }


}
