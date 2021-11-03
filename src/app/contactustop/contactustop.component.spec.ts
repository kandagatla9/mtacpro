import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactustopComponent } from './contactustop.component';

describe('ContactustopComponent', () => {
  let component: ContactustopComponent;
  let fixture: ComponentFixture<ContactustopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContactustopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactustopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
