import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-w-contact-form',
  templateUrl: './w-contact-form.component.html'
})
export class WContactFormComponent {

  @Input() dataLang;
  @Input() dataW;

  constructor() { }

}
