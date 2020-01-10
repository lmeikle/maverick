import React from 'react';
import * as kawaii from 'react-kawaii';
import styles from './catalog.module.css';
import Item from './item/Item';

const KAWAII_CHARACTERS = [
  <kawaii.Backpack size={200} mood="blissful" color="#FCCB7E" />,
  <kawaii.Cat size={200} mood="lovestruck" color="#A6E191" />,
  <kawaii.File size={200} mood="happy" color="#FDA7DC" />,
  <kawaii.Ghost size={200} mood="excited" color="#E0E4E8" />,
  <kawaii.IceCream size={200} mood="sad" color="#83D1FB" />,
  <kawaii.Mug size={200} mood="shocked" color="#FCCB7E" />,
  <kawaii.Planet size={200} mood="ko" color="#A6E191" />,
  <kawaii.SpeechBubble size={200} mood="blissful" color="#FDA7DC" />,
];

const Catalog = () => {
  return (
    <div className={styles.container}>
      <div className={styles.itemsContainer}>
        {KAWAII_CHARACTERS.map(val => {
          return <Item character={val} />;
        })}
      </div>
    </div>
  );
};

export default Catalog;
