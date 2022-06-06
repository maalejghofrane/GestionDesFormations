import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateformateurComponent } from './createformateur.component';

describe('CreateformateurComponent', () => {
  let component: CreateformateurComponent;
  let fixture: ComponentFixture<CreateformateurComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateformateurComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateformateurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
