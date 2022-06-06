import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateDomaineComponent } from './create-domaine.component';

describe('CreateDomaineComponent', () => {
  let component: CreateDomaineComponent;
  let fixture: ComponentFixture<CreateDomaineComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateDomaineComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateDomaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
