import { Component, Input } from '@angular/core';
import { Workshop } from '../../../interfaces/workshops';

@Component({
  selector: 'app-info-card-slider',
  templateUrl: './info-card-slider.component.html',
  styleUrl: './info-card-slider.component.scss'
})
export class InfoCardSliderComponent {
  @Input() configs: Workshop[] = []
  }
