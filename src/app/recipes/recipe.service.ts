import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";
import {Subject} from "rxjs";

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>();

  private recipes: Recipe[] = [
    new Recipe(
      'A test recipe',
      'This is a test recipe.',
      'https://sashasfinefoods.com/cdn/shop/articles/WEB_Recipe_Images__700x500px_8.png?v=1658799349',
      [
        new Ingredient('Meat', 1),
        new Ingredient('Potato', 4)
      ]),
    new Recipe(
      'Second recipe',
      'This is a second recipe.',
      'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/aadbcc1b4eff6d3d2a32361f1ad74c72/Derivates/755a4e73c9b36ccdaaa5886cd70948fae9ae7e03.jpg',
      [
        new Ingredient('Tomato sauce', 1),
        new Ingredient('Mozzarella', 1)
      ])
  ];

  constructor(private shoppingListService: ShoppingListService) {}

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index];
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice());
  }
}
