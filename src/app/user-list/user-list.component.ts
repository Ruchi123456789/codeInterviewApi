import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';
import {Iuser} from "../user";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

 val;
  users:Observable<Iuser[]>;
  
  toggleShowHide:boolean=true;

  constructor(private _userService: UserService , private router:Router,  private route : ActivatedRoute ) { }


  ngOnInit(): void {

   // console.log("val ", this.val);
    

    setTimeout(()=>{
      this.toggleShowHide=false;
    },3000)

     this.toggleShowHide=true;

    this.users = this.getData();
  }
 
  getData():Observable<Iuser[]>{
   return this._userService.getUsers();
  }

  a(b){
    console.log("b ", b.target.value)  ;
  }

  forward(){
  this.router.navigate(['firstpage']);
  }
   
}
