import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }
  allowUser: boolean = false;
  users=[
    {username: 'nikhil',password: 'nikhil'},
    {username: 'ironman',password:'ironman'},
    {username: 'conman',password: 'conman'}
  ];

  ngOnInit(): void {
  }

  onSubmit(f: NgForm){
    console.log(localStorage);
    this.authService.login(f.value.username,f.value.password)
    .subscribe((data) => {console.log(data)})
    this.users.forEach((data)=>{
      if(JSON.stringify(data)==JSON.stringify(f.value)){
        this.router.navigate(['']);
      }
    })
    this.allowUser=true;
  }
}
