import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateParticipantComponent } from './update-participant.component';

describe('UpdateParticipantComponent', () => {
  let component: UpdateParticipantComponent;
  let fixture: ComponentFixture<UpdateParticipantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateParticipantComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateParticipantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
