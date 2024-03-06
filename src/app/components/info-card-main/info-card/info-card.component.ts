import { Component, Input } from '@angular/core';
import { Workshop } from '../../../interfaces/workshops';

@Component({
  selector: 'app-info-card',
  templateUrl: './info-card.component.html',
  styleUrl: './info-card.component.scss'
})
export class InfoCardComponent {
@Input() config: Workshop = {
  title: '',
  type: 'Online',
  description: '',
  schedule: '',
  date: '',
  instructor: '',
  image: '',
}
 
}
