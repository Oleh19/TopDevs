import { FC } from 'react';
import styles from './MainPage.module.scss';
import { Header } from '../../../widgets/Header/';
import { BooksToolbar } from '../../../widgets/BooksToolbar';
import { ItemList } from '../../../widgets/ItemList';
import booksData from '../../../shared/data/booksData.json';
import useSortFunction from '../../../shared/hooks/useSort';

const MainPage: FC = () => {
  const title = 'Books Read This Month';
  const { setSortOption, sortFunction } = useSortFunction();

  return (
    <div className={styles.wrapper}>
      <Header>{title}</Header>
      <BooksToolbar setSortOption={setSortOption} />
      <ItemList data={booksData} sortFunction={sortFunction} />
    </div>
  );
};

export default MainPage;
