import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomestaysComponent } from './homestays.component';

describe('HomestaysComponent', () => {
  let component: HomestaysComponent;
  let fixture: ComponentFixture<HomestaysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomestaysComponent]
    });
    fixture = TestBed.createComponent(HomestaysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
