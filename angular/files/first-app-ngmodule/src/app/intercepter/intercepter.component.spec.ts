import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntercepterComponent } from './intercepter.component';

describe('IntercepterComponent', () => {
  let component: IntercepterComponent;
  let fixture: ComponentFixture<IntercepterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [IntercepterComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntercepterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
