import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TwoWay } from './two-way';

describe('TwoWay', () => {
  let component: TwoWay;
  let fixture: ComponentFixture<TwoWay>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TwoWay]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TwoWay);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
