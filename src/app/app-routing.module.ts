import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CompsGuard } from './services/comps.guard';


const routes: Routes = [
  {path:'',component:ProductListComponent,pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'product/:id',component:ProductDetailsComponent,canActivate: [CompsGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
