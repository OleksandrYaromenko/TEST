import { Meal } from '../../types.tsx';
import scss from './RescioesList.module.scss';

import { Recipe } from '../Recipe/Recipe.tsx';

interface RecipesListProps {
  recipes: Meal[];
}
export function RescipesList({ recipes }: RecipesListProps) {
  return (
    <ul className={scss.container}>
      {recipes.map((meal: Meal) => (
        <li key={meal.idMeal} className={scss.container_list}>
          <div>
            <Recipe
              key={meal.idMeal}
              id={meal.idMeal}
              title={meal.strMeal}
              image={meal.strMealThumb}
              category={meal.strCategory}
              area={meal.strArea}
            />
          </div>
        </li>
      ))}
    </ul>
  );
}
