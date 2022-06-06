import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbdCarouselNavigationComponent } from './ngbd-carousel-navigation.component';

describe('NgbdCarouselNavigationComponent', () => {
  let component: NgbdCarouselNavigationComponent;
  let fixture: ComponentFixture<NgbdCarouselNavigationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbdCarouselNavigationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbdCarouselNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
