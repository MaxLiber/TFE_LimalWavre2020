import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactBlackListComponent } from './contact-black-list.component';

describe('ContactBlackListComponent', () => {
  let component: ContactBlackListComponent;
  let fixture: ComponentFixture<ContactBlackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactBlackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactBlackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
