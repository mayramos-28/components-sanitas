import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionalCardSliderComponent } from './nutritional-card-slider.component';

describe('NutritionalCardSliderComponent', () => {
  let component: NutritionalCardSliderComponent;
  let fixture: ComponentFixture<NutritionalCardSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionalCardSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionalCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
