import React from 'react';
import Styles from './SpinnerLoading.module.scss';

const SpinnerLoading = () => {
  return (
    <div className={Styles.spinnerContainer}>
      <div className={Styles.spinner}></div>
    </div>
  );
};

export default SpinnerLoading;