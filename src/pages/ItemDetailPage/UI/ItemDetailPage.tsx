import { FC, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import booksData from '../../../shared/data/booksData.json';
import { Book } from '../../../shared/data/types';
import styles from './ItemDetailPage.module.scss';
import { Header } from '../../../widgets/Header';
import back from '../../../shared/assets/icons/arrowBack.svg';
import { ItemDescription } from '../../../entities/ItemDescription';

interface Product extends Book {}

const ItemDetailPage: FC = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);

  useEffect(() => {
    if (id) {
      const productId = parseInt(id, 10);
      const selectedProduct =
        booksData.find((item) => item.id === productId) || null;
      setProduct(selectedProduct);
    }
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.wrapper}>
      <Header>
        <Link to='/'>
          <img className={styles.image} src={back} alt='Back' />
        </Link>
      </Header>
      <ItemDescription {...product} />
    </div>
  );
};

export default ItemDetailPage;
