import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateOrganismeComponent } from './create-organisme.component';

describe('CreateOrganismeComponent', () => {
  let component: CreateOrganismeComponent;
  let fixture: ComponentFixture<CreateOrganismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateOrganismeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateOrganismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
