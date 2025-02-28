import { useQuery } from '@tanstack/react-query';
import { fetchRecipes } from '../../api/recipes.ts';
import { RescipesList } from '../../componets/RecipesList/RescipesList.tsx';
import { useState } from 'react';
import { Meal } from '../../types.tsx';

export function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipes
  });
  const [category, setCategory] = useState<string>('');
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading recipes</p>;
  const filteredRecipes = category
    ? data.filter((meal: Meal) => meal.strCategory === category)
    : data;
  return (
    <div>
      <h1>Recipes</h1>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">Categories</option>
        {[...new Set(data.map((meal: Meal) => meal.strCategory))].map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
      <RescipesList recipes={filteredRecipes} />
    </div>
  );
}
