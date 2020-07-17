import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionBreakMoveComponent } from './section-break-move.component';

describe('SectionBreakMoveComponent', () => {
  let component: SectionBreakMoveComponent;
  let fixture: ComponentFixture<SectionBreakMoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionBreakMoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionBreakMoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
