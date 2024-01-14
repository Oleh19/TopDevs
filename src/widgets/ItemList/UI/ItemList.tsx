import { FC, useEffect, useState } from 'react';
import { ItemCart } from '../../../entities/ItemCart';
import styles from './ItemList.module.scss';
import { Loader } from '../../../shared/UI/Loader/Loader';
import { Book } from '../../../shared/data/types';

interface Props {
  data: Book[];
  sortFunction: (a: Book, b: Book) => number;
}

export const ItemList: FC<Props> = ({ data, sortFunction }) => {
  const [visibleProducts, setVisibleProducts] = useState<Book[]>([]);
  const [loading, setLoading] = useState(false);
  const totalProducts = 30;

  // lazy loading simulation
  const loadMoreProducts = () => {
    if (visibleProducts.length < totalProducts) {
      setLoading(true);

      setTimeout(() => {
        setVisibleProducts((prevProducts) => {
          const nextProducts = data.slice(
            prevProducts.length,
            prevProducts.length + 5
          );
          return [...prevProducts, ...nextProducts].sort(sortFunction);
        });
        setLoading(false);
      }, 1000);
    }
  };

  const handleWheel = (event: WheelEvent) => {
    if (event.deltaY > 0 && !loading) {
      loadMoreProducts();
    }
  };

  useEffect(() => {
    loadMoreProducts();
  }, [sortFunction]);

  useEffect(() => {
    window.addEventListener('wheel', handleWheel);

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }, [visibleProducts, loading, sortFunction]);

  return (
    <div className={styles.gridContainer}>
      {visibleProducts.map((product, index) => (
        <ItemCart key={index} {...product} />
      ))}

      {loading && (
        <div className={styles.loaderContainer}>
          <Loader />
        </div>
      )}
    </div>
  );
};
