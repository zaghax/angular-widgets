import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WProfileComponent } from './w-profile.component';

describe('WProfileComponent', () => {
  let component: WProfileComponent;
  let fixture: ComponentFixture<WProfileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WProfileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
