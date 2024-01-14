import { FC } from 'react';
import loading from '../../../shared/assets/icons/loading.svg';
import styles from './Loader.module.scss';

export const Loader: FC = () => {
  return (
    <img className={styles.spinner} src={loading} alt='Loading Animation' />
  );
};
