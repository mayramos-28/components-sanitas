import { Component, OnInit } from '@angular/core';
import { recipes } from '../../assets/datos/recipes';

@Component({
  selector: 'app-nutritional-card-main',
  templateUrl: './nutritional-card-main.component.html',
  styleUrl: './nutritional-card-main.component.scss'
})
export class NutritionalCardMainComponent implements OnInit {
recipes: any[] = []

ngOnInit(): void {
    this.recipes = recipes
}

}
