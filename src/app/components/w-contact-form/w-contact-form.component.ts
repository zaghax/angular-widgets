import { Component, OnInit, Input, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-w-contact-form',
  templateUrl: './w-contact-form.component.html'
})
export class WContactFormComponent implements OnInit {

  @Input() dataLang;
  @Input() dataW;

  constructor() { }

  ngOnInit() {

  }

  ngOnChanges(changes:SimpleChange){
    
  }

}
