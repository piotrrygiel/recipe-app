import { Component } from '@angular/core';
import { Recipe } from "./recipe.model";
import { RecipeService } from "./recipe.service";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
  providers: [RecipeService]
})
export class RecipesComponent {
  chosen_recipe: Recipe;

  onChosenRecipe(chosen_recipe: Recipe) {
    this.chosen_recipe = chosen_recipe;
  }
}
