import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateProfilsComponent } from './create-profils.component';

describe('CreateProfilsComponent', () => {
  let component: CreateProfilsComponent;
  let fixture: ComponentFixture<CreateProfilsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateProfilsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProfilsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
