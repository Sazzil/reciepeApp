import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test Recipe', 'This is a Test', 'http://maxpixel.freegreatpicture.com/static/photo/640/Recipe-Salty-Dog-Party-Drink-Alcohol-Cocktail-831762.jpg')
  ];
  constructor() { }

  ngOnInit() {
  }

}
