import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe (
      'Tasty Schnitzel',
      'A super-tasty Schnitzel!',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAc3WBlH5FxrprrBj6gT3tZgHwFGMu4XycqQ&usqp=CAU',
      [
        new Ingredient('Meat', 1),
        new Ingredient('French Fries', 20)
      ]),
    new Recipe (
     'Big Fat Burger',
     'What else do you need to say?',
     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKhdJ6Md_TVBcp3oNVjk-uyI34eI_D4Oo64g&usqp=CAU',
     [
       new Ingredient('Buns', 2),
       new Ingredient('Meat', 1)
     ]),
     new Recipe (
      'Yummy Egg Pie',
      'Perfect Breakfast!',
      'https://cdn.pixabay.com/photo/2015/05/23/22/04/omelette-781105_1280.jpg',
      [
        new Ingredient('Eggs', 12),
        new Ingredient('Mushrooms', 6),
        new Ingredient('Scallions', 2)
      ])
    ];

constructor(private slService: ShoppingListService){}


getRecipes() {
  return this.recipes.slice();
}

getRecipe(index: number) {
  return this.recipes[index];
}

addIngredientsToShoppingList(ingredients: Ingredient[])  {
  this.slService.addIngredients(ingredients);
}
}
