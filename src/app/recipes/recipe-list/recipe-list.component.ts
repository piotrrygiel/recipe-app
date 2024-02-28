import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe } from "../recipe.model";
import { RecipeService } from "../recipe.service";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[];
  @Output() chosen_recipe = new EventEmitter<Recipe>();

  constructor(private recipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }

  onItemClicked(chosen_recipe: Recipe) {
    this.chosen_recipe.emit(chosen_recipe);
  }
}
