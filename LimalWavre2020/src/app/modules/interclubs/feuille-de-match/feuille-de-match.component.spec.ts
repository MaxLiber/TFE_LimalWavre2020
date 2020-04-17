import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeuilleDeMatchComponent } from './feuille-de-match.component';

describe('FeuilleDeMatchComponent', () => {
  let component: FeuilleDeMatchComponent;
  let fixture: ComponentFixture<FeuilleDeMatchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeuilleDeMatchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeuilleDeMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
