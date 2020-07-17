import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBreakMovePage1Component } from './section-break-move-page1.component';

describe('SectionBreakMovePage1Component', () => {
  let component: SectionBreakMovePage1Component;
  let fixture: ComponentFixture<SectionBreakMovePage1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBreakMovePage1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBreakMovePage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
