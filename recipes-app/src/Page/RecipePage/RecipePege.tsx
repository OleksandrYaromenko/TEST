import { useParams } from 'react-router-dom';
import { fetchRecipeById } from '../../api/recipes.ts';
import { useQuery } from '@tanstack/react-query';

export function RecipePage() {
  const { id } = useParams<{ id: string }>();

  const {
    data: recipe,
    error,
    isLoading
  } = useQuery({
    queryKey: ['recipe', id],
    queryFn: () => fetchRecipeById(id!)
  });
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading recipes</p>;
  return (
    <div>
      <h1>{recipe.strMeal}</h1>
      <img src={recipe.strMealThumb} alt={recipe.strMeal} />
      <p>
        {recipe.strCategory} • {recipe.strArea}
      </p>
      <h2>Instructions</h2>
      <p>{recipe.strInstructions}</p>
    </div>
  );
}
