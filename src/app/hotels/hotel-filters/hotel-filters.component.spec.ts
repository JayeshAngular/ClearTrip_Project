import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HotelFiltersComponent } from './hotel-filters.component';

describe('HotelFiltersComponent', () => {
  let component: HotelFiltersComponent;
  let fixture: ComponentFixture<HotelFiltersComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HotelFiltersComponent]
    });
    fixture = TestBed.createComponent(HotelFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
