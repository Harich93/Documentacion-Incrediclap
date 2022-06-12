import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccordionFrontComponent } from './accordion-front.component';

describe('AccordionFrontComponent', () => {
  let component: AccordionFrontComponent;
  let fixture: ComponentFixture<AccordionFrontComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccordionFrontComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccordionFrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
