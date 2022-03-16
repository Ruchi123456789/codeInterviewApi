import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Code-for-Interview-Api-Call';

  constructor(private router: Router){}

  logout(){
    let u = confirm("Are you sure you want 2 logout?");
    if(u===true){
      this.router.navigate(["/login"]);
    }
    if(u===false){
      alert("okay..");
    }
  }
}
