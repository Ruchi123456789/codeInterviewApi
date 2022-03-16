import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit(): void {
  }

  submit(form){
   console.log("form ", form.value);
   if(form.value.username==="Rucha" && form.value.password==="1234"){
     alert("successfully logged in..");

     this.router.navigate(["/user"]);

   }

   else{
     alert("wrong credentials..");
   }
   form.reset();
  }

}
