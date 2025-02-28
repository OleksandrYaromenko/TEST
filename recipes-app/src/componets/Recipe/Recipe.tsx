import { Link } from 'react-router-dom';

type RecipeCardProps = {
  id: string;
  title: string;
  image: string;
  category: string;
  area: string;
};
export function Recipe({ id, title, image, category, area }: RecipeCardProps) {
  return (
    <Link to={`/recipe/${id}`}>
      <img src={image} alt={title} width={200} height={200} />
      <div>
        <h3>{title}</h3>
        <p>
          {category} • {area}
        </p>
      </div>
    </Link>
  );
}
