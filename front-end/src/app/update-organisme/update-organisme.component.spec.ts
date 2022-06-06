import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateOrganismeComponent } from './update-organisme.component';

describe('UpdateOrganismeComponent', () => {
  let component: UpdateOrganismeComponent;
  let fixture: ComponentFixture<UpdateOrganismeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateOrganismeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateOrganismeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
