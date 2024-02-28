import {Recipe} from "./recipe.model";

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test recipe.', 'https://sashasfinefoods.com/cdn/shop/articles/WEB_Recipe_Images__700x500px_8.png?v=1658799349'),
    new Recipe('Second recipe', 'This is a second recipe.', 'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/aadbcc1b4eff6d3d2a32361f1ad74c72/Derivates/755a4e73c9b36ccdaaa5886cd70948fae9ae7e03.jpg')
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
