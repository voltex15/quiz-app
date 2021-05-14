import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryRestApiComponent } from './category-rest-api.component';

describe('CategoryRestApiComponent', () => {
  let component: CategoryRestApiComponent;
  let fixture: ComponentFixture<CategoryRestApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategoryRestApiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryRestApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
