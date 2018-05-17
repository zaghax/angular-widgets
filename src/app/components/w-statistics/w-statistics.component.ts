import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-w-statistics',
  templateUrl: './w-statistics.component.html'
})
export class WStatisticsComponent implements OnInit {

  @Input() dataLang;
  
  constructor() { }

  ngOnInit() {
  }

}
