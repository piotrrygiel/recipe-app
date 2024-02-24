import { Component } from '@angular/core';
import {Recipe} from "./recipe.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent {
  chosen_recipe: Recipe;

  onChosenRecipe(chosen_recipe: Recipe) {
    this.chosen_recipe = chosen_recipe;
  }
}
