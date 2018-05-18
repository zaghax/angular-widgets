import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-w-statistics',
  templateUrl: './w-statistics.component.html'
})
export class WStatisticsComponent {

  @Input() dataLang;
  @Input() dataW;
  
  constructor() { }

}
