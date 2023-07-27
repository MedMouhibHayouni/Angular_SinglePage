import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyPage2Component } from './empty-page2.component';

describe('EmptyPage2Component', () => {
  let component: EmptyPage2Component;
  let fixture: ComponentFixture<EmptyPage2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EmptyPage2Component]
    });
    fixture = TestBed.createComponent(EmptyPage2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
