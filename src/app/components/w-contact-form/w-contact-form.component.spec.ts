import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WContactFormComponent } from './w-contact-form.component';

describe('WContactFormComponent', () => {
  let component: WContactFormComponent;
  let fixture: ComponentFixture<WContactFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WContactFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WContactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
