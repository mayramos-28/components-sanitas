import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nutritional-card',
  templateUrl: './nutritional-card.component.html',
  styleUrl: './nutritional-card.component.scss'
})
export class NutritionalCardComponent {
  @Input() recipe: any = {}
  isSidea: boolean = true;
 
  changeSide() {
    this.isSidea = !this.isSidea;
  }
  constructor() { 
    console.log(this.recipe)
  }


}
