import { FC, useState } from 'react';
import Select from 'react-select';
import styles from './BooksToolbar.module.scss';
import booksData from '../../../shared/data/booksData.json';
import sort from '../../../shared/assets/icons/sort.svg';
import arrowDown from '../../../shared/assets/icons/arrowDown.svg';
import arrowTop from '../../../shared/assets/icons/arrowTop.svg';
import { customStyles, options } from './utils/selectStyle';

interface Props {
  setSortOption: React.Dispatch<React.SetStateAction<string>>;
}

export const BooksToolbar: FC<Props> = ({ setSortOption }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleChange = (selectedOption: any) => {
    setSortOption(selectedOption.value);
  };

  const handleMenuOpen = () => {
    setIsMenuOpen(true);
  };

  const handleMenuClose = () => {
    setIsMenuOpen(false);
  };

  return (
    <div className={styles.wrapper}>
      <span>{booksData.length} Books</span>
      <div className={styles.sortWrapper}>
        <div className={styles.leftSort}>
          <img className={styles.sortImage} src={sort} alt='sort' />
          <span className={styles.sortText}>Sort By</span>
        </div>

        <Select
          styles={customStyles}
          options={options}
          onChange={handleChange}
          onMenuOpen={handleMenuOpen}
          onMenuClose={handleMenuClose}
          components={{
            DropdownIndicator: () => (
              <img src={isMenuOpen ? arrowTop : arrowDown} alt='sort' />
            ),
          }}
          menuPortalTarget={document.body}
        />
      </div>
    </div>
  );
};
