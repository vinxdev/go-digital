import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsercartComponent } from './usercart.component';

describe('UsercartComponent', () => {
  let component: UsercartComponent;
  let fixture: ComponentFixture<UsercartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UsercartComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UsercartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
