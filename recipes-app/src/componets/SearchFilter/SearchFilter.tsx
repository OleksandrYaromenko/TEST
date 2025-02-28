import { useState, useEffect } from 'react';
import useDebounce from '../../hooks/Debounse.tsx';

interface SearchFilterProps {
  setSearchQuery: (query: string) => void;
}

export function SearchFilter({ setSearchQuery }: SearchFilterProps) {
  const [search, setSearch] = useState('');
  const debouncedSearch = useDebounce(search, 500);

  useEffect(() => {
    setSearchQuery(debouncedSearch);
  }, [debouncedSearch, setSearchQuery]);

  return (
    <input
      type="text"
      value={search || ''}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
}
