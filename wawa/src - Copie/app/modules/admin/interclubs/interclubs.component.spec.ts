import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InterclubsComponent } from './interclubs.component';

describe('InterclubsComponent', () => {
  let component: InterclubsComponent;
  let fixture: ComponentFixture<InterclubsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InterclubsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InterclubsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
