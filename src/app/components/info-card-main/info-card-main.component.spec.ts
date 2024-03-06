import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCardMainComponent } from './info-card-main.component';

describe('InfoCardMainComponent', () => {
  let component: InfoCardMainComponent;
  let fixture: ComponentFixture<InfoCardMainComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [InfoCardMainComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InfoCardMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
