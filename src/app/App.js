import React from 'react';
import styles from './app.module.css';
import Catalog from '../components/catalog/Catalog';

function App() {
  return (
    <div className={styles.app}>
      <Catalog />
    </div>
  );
}

export default App;
