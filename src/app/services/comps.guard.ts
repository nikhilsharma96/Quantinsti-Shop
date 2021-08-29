import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class CompsGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let url = state.url;
      return this.checkLogin(url);
  }
  
  checkLogin(url: string):true | UrlTree{
    let val: string = localStorage.getItem('isUserLoggedIn');
    if(val !=null && val=='true'){
      this.router.parseUrl('/pass');
      return true;
    } 
    else{ return this.router.parseUrl(''); }
    
  }

}
