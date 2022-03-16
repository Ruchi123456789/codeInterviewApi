import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ShareDataService } from '../share-data.service';
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-thirdpage',
  templateUrl: './thirdpage.component.html',
  styleUrls: ['./thirdpage.component.scss']
})
export class ThirdpageComponent implements OnInit {

  @ViewChild("table" , {static:false}) el :ElementRef;

  constructor(private _shareDataService :ShareDataService) { }

  getData : any;

  getDataArray= [];

  ngOnInit(): void {
    this._shareDataService.shareData.subscribe(data=>{
      console.log("data ", data);
      this.getData = data;
    })
  }
 
  getD(){
    console.log("get D ", this.getData);
  }

  downloadPdf(){
    let pdf = new jsPDF('p','pt','a4');
    pdf.html(this.el.nativeElement,{
      callback:(pdf)=>{
        pdf.save("demo.pdf");
      }
    })
  }

}
