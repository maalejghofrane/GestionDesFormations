import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateParticipantsSessionsComponent } from './create-participants-sessions.component';

describe('CreateParticipantsSessionsComponent', () => {
  let component: CreateParticipantsSessionsComponent;
  let fixture: ComponentFixture<CreateParticipantsSessionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateParticipantsSessionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateParticipantsSessionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
