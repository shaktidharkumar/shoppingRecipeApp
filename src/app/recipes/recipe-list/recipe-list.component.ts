import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipes: Recipe[] = [
    new Recipe('A test recipe 1', 'Test recipe description goes here', 'https://c.pxhere.com/photos/71/51/esfiha_power_supply_pizza-1375834.jpg!d'),
    new Recipe('A test recipe 2', 'Test recipe description goes here', 'https://c.pxhere.com/photos/71/51/esfiha_power_supply_pizza-1375834.jpg!d')
  ];

  @Output() recipeWasSelected = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit() {
  }

  onRecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
