import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HamfestComponent } from './hamfest.component';

describe('HamfestComponent', () => {
  let component: HamfestComponent;
  let fixture: ComponentFixture<HamfestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HamfestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HamfestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
