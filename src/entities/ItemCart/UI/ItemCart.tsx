import { FC, useEffect, useState } from 'react';
import styles from './ItemCart.module.scss';
import { Viewed } from '../../../shared/UI/Viewed/Viewed';
import { Link } from 'react-router-dom';
import { Book } from '../../../shared/data/types';

interface Props extends Book {}

export const ItemCart: FC<Props> = ({ title, author, rating, id, image }) => {
  const [viewed, setViewed] = useState(() => {
    const viewedStatus = localStorage.getItem(`viewed_${id}`);
    return viewedStatus === 'true';
  });

  useEffect(() => {
    localStorage.setItem(`viewed_${id}`, JSON.stringify(viewed));
  }, [id, viewed]);

  const handleProductClick = () => {
    localStorage.setItem(`viewed_${id}`, 'true');
    setViewed(true);
  };

  return (
    <Link
      to={`/product/${id}`}
      className={styles.link}
      onClick={handleProductClick}
    >
      <div className={styles.wrapper}>
        <div className={styles.imageWrapper}>
          <Viewed viewed={viewed} imageStyles={styles.view} />
          <img src={image} alt='Item' className={styles.image} />
        </div>
        <div className={styles.description}>
          <span className={styles.author}>{author}</span>
          <span className={styles.title}>{title}</span>
          <span className={styles.rating}>{rating}/100</span>
        </div>
      </div>
    </Link>
  );
};
