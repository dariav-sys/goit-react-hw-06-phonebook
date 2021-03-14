import React from 'react';
import styles from './Filter.module.css';

const Filter = ({ value, onChange }) => {
  return (
    <>
      <label>
        <input
          className={styles.input}
          placeholder="Filter by:"
          type="text"
          name="filter"
          value={value}
          onChange={onChange}
        ></input>
      </label>
    </>
  );
};

export default Filter;
