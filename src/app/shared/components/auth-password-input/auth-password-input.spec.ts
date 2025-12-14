import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthPasswordInput } from './auth-password-input';

describe('AuthPasswordInput', () => {
  let component: AuthPasswordInput;
  let fixture: ComponentFixture<AuthPasswordInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthPasswordInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthPasswordInput);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
