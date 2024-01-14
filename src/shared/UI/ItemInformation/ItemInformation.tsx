import { FC } from 'react';
import { Book } from '../../data/types';
import styles from './ItemInformation.module.scss';

interface Props extends Book {}

export const ItemInformation: FC<Props> = ({
  title,
  author,
  rating,
  description,
  review,
}) => {
  return (
    <>
      <span className={styles.text}>Title: {title}</span>
      <span className={styles.text}>Author: {author}</span>
      <span className={styles.text}>Rating: {rating}/5</span>
      <div className={styles.textWrapper}>
        <span className={styles.description}>Description: </span>
        <span className={styles.text}>{description}</span>
      </div>
      <div className={styles.textWrapper}>
        <span className={styles.description}>Reader reviews: </span>
        <span className={styles.text}>{review}</span>
      </div>
    </>
  );
};
