import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-w-profile',
  templateUrl: './w-profile.component.html'
})
export class WProfileComponent {

  @Input() dataW;

  constructor() { }

}
