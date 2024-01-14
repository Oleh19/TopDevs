import { useState, useCallback } from 'react';
import { Book } from '../data/types';

const useSortFunction = () => {
  const [sortOption, setSortOption] = useState<string>('');

  const sortFunction = useCallback(
    (a: Book, b: Book) => {
      if (sortOption === 'title') {
        return a.title.localeCompare(b.title);
      } else if (sortOption === 'author') {
        return a.author.localeCompare(b.author);
      } else if (sortOption === 'rating') {
        return b.rating - a.rating;
      }
      return 0;
    },
    [sortOption]
  );

  return { sortOption, setSortOption, sortFunction };
};

export default useSortFunction;
