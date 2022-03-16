import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ShareDataService } from '../share-data.service';

@Component({
  selector: 'app-secondpage',
  templateUrl: './secondpage.component.html',
  styleUrls: ['./secondpage.component.scss']
})
export class SecondpageComponent implements OnInit {

  constructor(private roter: Router, private _shareDataService : ShareDataService) { }

  ngOnInit(): void {
  }

  formData=[];

  forward(form){
  console.log("form ", form.value);
  this.formData.push(form.value);
  this._shareDataService.shareData.next(this.formData);

  }

  back(){
    this.roter.navigate(["/firstpage"]);
  }

  np(){
    this.roter.navigate(["/thirdpage"]);
  }

}
