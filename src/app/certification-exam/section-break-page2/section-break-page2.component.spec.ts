import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBreakPage2Component } from './section-break-page2.component';

describe('SectionBreakPage2Component', () => {
  let component: SectionBreakPage2Component;
  let fixture: ComponentFixture<SectionBreakPage2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBreakPage2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBreakPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
