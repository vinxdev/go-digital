import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateaccComponent } from './createacc.component';

describe('CreateaccComponent', () => {
  let component: CreateaccComponent;
  let fixture: ComponentFixture<CreateaccComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateaccComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateaccComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
