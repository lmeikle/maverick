import React from 'react';
import * as kawaii from 'react-kawaii';
import styles from './catalog.module.css';
import Item from './item/Item';

const KAWAII_CHARACTERS = [
  <kawaii.Backpack mood="blissful" color="#FCCB7E" />,
  <kawaii.Cat mood="lovestruck" color="#A6E191" />,
  <kawaii.File mood="happy" color="#FDA7DC" />,
  <kawaii.Ghost mood="excited" color="#E0E4E8" />,
  <kawaii.IceCream mood="sad" color="#83D1FB" />,
  <kawaii.Mug mood="shocked" color="#FCCB7E" />,
  <kawaii.Planet mood="ko" color="#A6E191" />,
  <kawaii.SpeechBubble mood="blissful" color="#FDA7DC" />,
  <kawaii.Browser mood="lovestruck" color="#E0E4E8" />,
  <kawaii.CreditCard mood="happy" color="#83D1FB" />,
];

const Catalog = () => {
  return (
    <div className={styles.Catalog}>
      <span className={styles.Catalog_title}>Catalog of Characters</span>
      <div className={styles.Catalog_itemsContainer}>
        {KAWAII_CHARACTERS.map((val, i) => {
          return <Item key={i} character={val} />;
        })}
      </div>
    </div>
  );
};

export default Catalog;
