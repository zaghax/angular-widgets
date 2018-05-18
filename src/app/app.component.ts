import { Component, OnInit } from '@angular/core';
import { DataWidgetsService } from './services/data-widgets.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit{

  langs:any;
  currentLang:any;
  dataWtrans:any;
  dataWprof:any;
  dataWstat:any;
  dataWform:any;

  constructor(private dataLang:DataWidgetsService){ }
  
  ngOnInit(){

    this.dataLang.getService('languages.json').subscribe(
      
      (data) =>{
        this.langs = data;
        this.currentLang = data.english;
      }

    );

    this.dataLang.getService('data-widgets.json').subscribe(
      
      (data) =>{
        this.dataWtrans = data.dataTransfer;
        this.dataWprof = data.profile;
        this.dataWstat = data.statistics;
        this.dataWform = data.contactForm;
      }

     

    );
  }

  langSwitch = (opt) => {
    this.currentLang = this.langs[opt];
  }

  


}
