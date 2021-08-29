import { Component, OnInit } from '@angular/core';
import {  Router } from '@angular/router';
import {  Options } from 'ng5-slider';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  //fetching data 
  products=[];
  //fitltered list
  filteredProducts=[];
  //two way binding
  selected:any;
  //boolean value to check data
  dataPresent=true;
  //minimum price for range
  minPrice=0;
  //maximum price for range
  maxPrice=1000;
  //category to filter
  filterCategory='All';

  //array to get category
  Category = [
    {id: 'All', name: 'All'},
    {id: 'Men Clothing', name: 'Men Clothing'},
    {id: 'Women Clothing', name: 'Women Clothing'},
    {id: 'Jewelery', name: 'Jewelery'},
    {id: 'Electronics', name: 'Electronics'},
  ];

  //values for ng5 slider
  minValue: number = 0;
  maxValue: number = 1000;
  options: Options = {
    floor: 0,
    ceil: 1000,
  };

  constructor(private itemService:SearchService,
   private router: Router ) { }

  ngOnInit(): void {
    this.itemService.getData().subscribe((products:any)=>{
      this.products=products;
      this.filteredProducts=products;
      this.dataPresent=false
    });

    this.itemService.getSearchKey().subscribe((data:string)=>{
      let key = data;
      if (this.filterCategory.toLowerCase()=== 'All'.toLowerCase()){
        this.filteredProducts = this.products.filter((item)=>{
          return item.title.toLowerCase().startsWith(key.toLowerCase())
          && item.price>=this.minPrice && item.price<=this.maxPrice
        })
      }
      else{
        this.filteredProducts = this.products.filter((item)=>{
          return item.title.toLowerCase().startsWith(key.toLowerCase())
          && item.price>=this.minPrice && item.price<=this.maxPrice &&
          item.category.toLowerCase()===this.filterCategory.toLowerCase()
        })
      }
    })
  }

  //filtering data
  onOptionsSelected(){
    this.filterCategory=this.selected['name']; 
    if (this.filterCategory.toLowerCase()=== 'All'.toLowerCase()){
      this.filteredProducts = this.products
    }
    else{
      this.filteredProducts = this.products.filter
      (item=>{
        return item.category.toLowerCase()===this.filterCategory.toLowerCase()})
    }
  }

  //setting price range
  onRangeSelected(range){
    this.minPrice= range.value;
    this.maxPrice= range.highValue;
    if (this.filterCategory.toLowerCase()==='All'.toLowerCase()){
      this.filteredProducts = this.products.filter((item)=>{
        return item.price>=this.minPrice && item.price<=this.maxPrice
      })
    }
    else{
      this.filteredProducts = this.products.filter
      (item=>{return item.category.toLowerCase()===this.filterCategory.toLowerCase() 
      && item.price>=this.minPrice && item.price<=this.maxPrice
    })
    }
  }

  //routing to product detail
  productDetail(item){
    this.itemService.setSelectedData(item)
    this.router.navigate(['product',item.id])
  }

}
