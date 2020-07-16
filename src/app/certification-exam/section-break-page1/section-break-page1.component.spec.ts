import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBreakPage1Component } from './section-break-page1.component';

describe('SectionBreakPage1Component', () => {
  let component: SectionBreakPage1Component;
  let fixture: ComponentFixture<SectionBreakPage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBreakPage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBreakPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
