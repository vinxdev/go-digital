import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrainedinComponent } from './trainedin.component';

describe('TrainedinComponent', () => {
  let component: TrainedinComponent;
  let fixture: ComponentFixture<TrainedinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TrainedinComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrainedinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
