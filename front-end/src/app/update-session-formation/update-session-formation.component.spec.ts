import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateSessionFormationComponent } from './update-session-formation.component';

describe('UpdateSessionFormationComponent', () => {
  let component: UpdateSessionFormationComponent;
  let fixture: ComponentFixture<UpdateSessionFormationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateSessionFormationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateSessionFormationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
