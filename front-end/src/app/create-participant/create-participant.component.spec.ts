import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParticipantComponent } from './create-participant.component';

describe('CreateParticipantComponent', () => {
  let component: CreateParticipantComponent;
  let fixture: ComponentFixture<CreateParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
