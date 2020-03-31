import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsListeComponent } from './news-liste.component';

describe('NewsListeComponent', () => {
  let component: NewsListeComponent;
  let fixture: ComponentFixture<NewsListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
