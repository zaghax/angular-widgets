import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WStatisticsComponent } from './w-statistics.component';

describe('WStatisticsComponent', () => {
  let component: WStatisticsComponent;
  let fixture: ComponentFixture<WStatisticsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WStatisticsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WStatisticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
