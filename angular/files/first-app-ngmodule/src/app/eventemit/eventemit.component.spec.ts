import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventemitComponent } from './eventemit.component';

describe('EventemitComponent', () => {
  let component: EventemitComponent;
  let fixture: ComponentFixture<EventemitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EventemitComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventemitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
