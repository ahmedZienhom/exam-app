import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaticView } from './static-view';

describe('StaticView', () => {
  let component: StaticView;
  let fixture: ComponentFixture<StaticView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaticView]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaticView);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
