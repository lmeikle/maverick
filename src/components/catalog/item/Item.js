import React from 'react';
import styles from './item.module.css';

const Item = ({ character }) => {
  return <div className={styles.Item}>{character}</div>;
};

export default Item;
