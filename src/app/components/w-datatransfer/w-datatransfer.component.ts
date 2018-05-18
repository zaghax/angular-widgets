import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-w-datatransfer',
  templateUrl: './w-datatransfer.component.html'
})
export class WDatatransferComponent implements OnInit {

  @Input() dataLang;
  @Input() dataW;

  tabs:any = 'TAB_A';

  constructor() { }

  ngOnInit() {

    console.log(this.dataW)
  }

}
