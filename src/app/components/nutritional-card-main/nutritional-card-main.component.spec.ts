import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NutritionalCardMainComponent } from './nutritional-card-main.component';

describe('NutritionalCardMainComponent', () => {
  let component: NutritionalCardMainComponent;
  let fixture: ComponentFixture<NutritionalCardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NutritionalCardMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NutritionalCardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
