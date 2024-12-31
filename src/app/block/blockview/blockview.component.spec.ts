import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlockviewComponent } from './blockview.component';

describe('BlockviewComponent', () => {
  let component: BlockviewComponent;
  let fixture: ComponentFixture<BlockviewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BlockviewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlockviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
