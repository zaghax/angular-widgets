import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-w-datatransfer',
  templateUrl: './w-datatransfer.component.html'
})
export class WDatatransferComponent implements OnInit {

  @Input() dataLang;
  @Input() dataW;

  tabs:any = 'TAB_A';
  print:boolean = false;

  public doughnutChartData:number[];
  public doughnutChartType:string = 'doughnut';
  public doughnutChartColors:Array<any> = [
    { 
      backgroundColor: ["#4daf7b", "#e35836", "#ebc85e", "#f4ede7"]
    }
  ];

  constructor() { 
  }

  ngOnChanges(changes:SimpleChange){

    if(Object.keys(this.dataW).length){
      
      var X = [];

      this.dataW.dataT.pie.forEach(element => {
        X.push(element.size);
      });

      this.doughnutChartData = X;

      this.print = true;

    }

  }

  ngOnInit() {
  }
  

}
