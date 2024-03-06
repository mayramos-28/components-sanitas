import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionalCardComponent } from './nutritional-card.component';

describe('NutritionalCardComponent', () => {
  let component: NutritionalCardComponent;
  let fixture: ComponentFixture<NutritionalCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionalCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionalCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
