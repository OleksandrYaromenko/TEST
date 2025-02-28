import './App.css';
import { Route, Routes } from 'react-router-dom';
import { Home } from './Page/Home/Home.tsx';
import { RecipePage } from './Page/RecipePage/RecipePege.tsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipe/:id" element={<RecipePage />} />
        {/*<Route path="/favorites" element={<FavoritesPage />} />*/}
      </Routes>
    </>
  );
}

export default App;
