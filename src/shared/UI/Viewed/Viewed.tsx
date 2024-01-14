import { FC } from 'react';
import view from '../../assets/icons/view.svg';
import noView from '../../assets/icons/noView.svg';
import styles from './Viewed.module.scss';
import cn from 'classnames';

interface Props {
  imageStyles?: string;
  viewed: boolean;
}

export const Viewed: FC<Props> = ({ imageStyles, viewed }) => {
  const image = viewed ? view : noView;
  const combinedClassName = cn(styles.image, imageStyles);
  return (
    <>
      <img className={combinedClassName} src={image} alt='somethin' />
    </>
  );
};
