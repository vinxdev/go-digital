import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnchorScrollingComponent } from './anchor-scrolling.component';

describe('AnchorScrollingComponent', () => {
  let component: AnchorScrollingComponent;
  let fixture: ComponentFixture<AnchorScrollingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AnchorScrollingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnchorScrollingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
