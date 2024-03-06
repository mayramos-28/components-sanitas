import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardSliderComponent } from './info-card-slider.component';

describe('InfoCardSliderComponent', () => {
  let component: InfoCardSliderComponent;
  let fixture: ComponentFixture<InfoCardSliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCardSliderComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoCardSliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
