import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EquipesByCategoryComponent } from './equipes-by-category.component';

describe('EquipesByCategoryComponent', () => {
  let component: EquipesByCategoryComponent;
  let fixture: ComponentFixture<EquipesByCategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EquipesByCategoryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EquipesByCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
