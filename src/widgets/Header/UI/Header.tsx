import { FC, ReactNode } from 'react';
import styles from './Header.module.scss';

interface Props {
  children: string | ReactNode;
}

export const Header: FC<Props> = ({ children }) => {
  return <div className={styles.wrapper}>{children}</div>;
};
