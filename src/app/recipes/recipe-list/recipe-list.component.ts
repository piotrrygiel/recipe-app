import { Component } from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrl: './recipe-list.component.css'
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('A test recipe', 'This is a test recipe.', 'https://sashasfinefoods.com/cdn/shop/articles/WEB_Recipe_Images__700x500px_8.png?v=1658799349')
  ];
}
