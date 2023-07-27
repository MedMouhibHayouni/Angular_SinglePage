import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPage1Component } from './empty-page1.component';

describe('EmptyPage1Component', () => {
  let component: EmptyPage1Component;
  let fixture: ComponentFixture<EmptyPage1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyPage1Component]
    });
    fixture = TestBed.createComponent(EmptyPage1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
