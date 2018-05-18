import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-w-profile',
  templateUrl: './w-profile.component.html'
})
export class WProfileComponent implements OnInit {

  @Input() dataW;

  constructor() { }

  ngOnInit() {
  }

}
