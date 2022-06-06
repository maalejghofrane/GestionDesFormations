import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateSeesionFormationsComponent } from './create-seesion-formations.component';

describe('CreateSeesionFormationsComponent', () => {
  let component: CreateSeesionFormationsComponent;
  let fixture: ComponentFixture<CreateSeesionFormationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateSeesionFormationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateSeesionFormationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
