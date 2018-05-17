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

  constructor(private dataLang:DataWidgetsService){ }
  
  ngOnInit(){

    this.dataLang.getService('languages.json').subscribe(
      
      (data) =>{
        this.langs = data;
        this.currentLang = data.english;
      }

    );
  }

  langSwitch = (opt) => {
    this.currentLang = this.langs[opt];
  }

  


}
