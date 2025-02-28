import { useQuery } from '@tanstack/react-query';
import { fetchRecipes } from '../../api/recipes.ts';
import { RescipesList } from '../../componets/RecipesList/RescipesList.tsx';
import { useState } from 'react';
import { Meal } from '../../types.tsx';
import { Pagination } from 'antd';
import scss from './Home.module.scss';
export function Home() {
  const { data, error, isLoading } = useQuery({
    queryKey: ['recipes'],
    queryFn: fetchRecipes
  });

  const [category, setCategory] = useState<string>('');
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [itemsPerPage, setItemsPerPage] = useState<number>(10);

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading recipes</p>;

  const filteredRecipes = category
    ? data.filter((meal: Meal) => meal.strCategory === category)
    : data;

  const totalItems = filteredRecipes.length;
  const paginatedRecipes = filteredRecipes.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className={scss.container}>
      <h1>Recipes</h1>
      <select onChange={(e) => setCategory(e.target.value)}>
        <option value="">Categories</option>
        {[...new Set(data.map((meal: Meal) => meal.strCategory))].map((cat) => (
          <option key={cat as string} value={cat as string}>
            {cat as string}
          </option>
        ))}
      </select>
      <div>
        <RescipesList recipes={paginatedRecipes} />
      </div>
      <div>
        <Pagination
          current={currentPage}
          total={totalItems}
          pageSize={itemsPerPage}
          onChange={(page) => setCurrentPage(page)}
          showSizeChanger
          onShowSizeChange={(_, pageSize) => setItemsPerPage(pageSize)}
          showTotal={(total) => `Total ${total} items`}
        />
      </div>
    </div>
  );
}
