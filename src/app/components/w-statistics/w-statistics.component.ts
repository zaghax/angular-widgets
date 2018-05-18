import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-w-statistics',
  templateUrl: './w-statistics.component.html'
})
export class WStatisticsComponent {

  @Input() dataLang;
  @Input() dataW;

  public lineChartData:Array<any> = [
    {data: [10, 30, 60, 80, 56, 55, 40], label: 'Market Cap'}
  ];

  public lineChartLabels:Array<any> = ['0', '1', '2', '3', '4', '5', '6'];
  
  public lineChartOptions:any = {
    responsive: true
  };
  
  public lineChartColors:Array<any> = [
    {
      backgroundColor: 'rgba(255,255,255,0.2)',
      borderColor: 'rgba(255,255,255,1)',
      pointBackgroundColor: 'rgba(255,255,255,1)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgba(255,255,255,0.8)'
    }
  ];
  
  public lineChartType:string = 'line';
  
  constructor() { }

}
