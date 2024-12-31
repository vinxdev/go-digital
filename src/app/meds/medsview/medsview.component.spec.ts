import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedsviewComponent } from './medsview.component';

describe('MedsviewComponent', () => {
  let component: MedsviewComponent;
  let fixture: ComponentFixture<MedsviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MedsviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MedsviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
