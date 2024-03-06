import { Component, Input, OnInit } from '@angular/core';

import { Workshop } from '../../interfaces/workshops';
import { workshops } from '../../assets/datos/workshops';

@Component({
  selector: 'app-info-card-main',
  templateUrl: './info-card-main.component.html',
  styleUrl: './info-card-main.component.scss'
})
export class InfoCardMainComponent implements OnInit {

  @Input() configs: Workshop[] = [];

  ngOnInit(): void {
      this.configs =  workshops as Workshop[];  
  }
}
