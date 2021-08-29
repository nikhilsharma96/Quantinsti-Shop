import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent } from 'rxjs';
import { map, distinctUntilChanged } from 'rxjs/operators';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('search',{ static: true}) search: any;

  constructor(private searchSerice:SearchService) { }

  ngOnInit(): void {
    fromEvent(this.search.nativeElement,'keyup')
    .pipe(
      map((event:any)=>{
      return event.target.value;
    }),
    distinctUntilChanged(),
  )
  .subscribe((data:string)=>{
    this.searchSerice.setSearchData(data)
  })
  }
}
