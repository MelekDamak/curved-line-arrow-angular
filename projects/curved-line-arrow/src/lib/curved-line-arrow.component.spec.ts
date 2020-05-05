import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CurvedLineArrowComponent } from './curved-line-arrow.component';

describe('CurvedLineArrowComponent', () => {
  let component: CurvedLineArrowComponent;
  let fixture: ComponentFixture<CurvedLineArrowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CurvedLineArrowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CurvedLineArrowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
