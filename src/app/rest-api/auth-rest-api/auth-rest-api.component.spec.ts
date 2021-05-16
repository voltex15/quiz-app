import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthRestApiComponent } from './auth-rest-api.component';

describe('AuthRestApiComponent', () => {
  let component: AuthRestApiComponent;
  let fixture: ComponentFixture<AuthRestApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthRestApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthRestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
