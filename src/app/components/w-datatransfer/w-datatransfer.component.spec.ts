import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WDatatransferComponent } from './w-datatransfer.component';

describe('WDatatransferComponent', () => {
  let component: WDatatransferComponent;
  let fixture: ComponentFixture<WDatatransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WDatatransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WDatatransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
