import { Component, Input, OnInit } from '@angular/core';
import recipes from '../../../interfaces/recipes';



@Component({
  selector: 'app-nutritional-card-slider',
  templateUrl: './nutritional-card-slider.component.html',
  styleUrl: './nutritional-card-slider.component.scss'
})
export class NutritionalCardSliderComponent {
  @Input() recipes: recipes[] = []

  
 
}
