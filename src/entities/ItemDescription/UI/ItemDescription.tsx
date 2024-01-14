import { FC } from 'react';
import styles from './ItemDescription.module.scss';
import { ItemInformation } from '../../../shared/UI/ItemInformation/ItemInformation';
import { Book } from '../../../shared/data/types';

interface Props extends Book {}

export const ItemDescription: FC<Props> = (props) => {
  return (
    <>
      <div className={styles.contentWrapper}>
        <div className={styles.leftSide}>
          <img src={props.image} className={styles.image} />
          <div className={styles.downloads}>Downloads: {props.downloads}</div>
        </div>
        <div className={styles.rightSide}>
          <ItemInformation {...props} />
        </div>
      </div>
    </>
  );
};
