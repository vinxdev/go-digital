import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarinedinviewComponent } from './tarinedinview.component';

describe('TarinedinviewComponent', () => {
  let component: TarinedinviewComponent;
  let fixture: ComponentFixture<TarinedinviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TarinedinviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TarinedinviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
