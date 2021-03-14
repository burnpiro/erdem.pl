// @flow
import React from 'react';

import styles from './XAIInfidelity.module.scss';
import Typography from '@material-ui/core/Typography';

const Scores = ({
  inputScores = [0, 0],
  maskedInputScores = [0.0],
  infidelity = 0,
}) => {
  return (
    <div className={styles['infidelity-scores']}>
      <Typography variant={'h4'} color={'primary'} align={'justify'}>
        {`Infidelity: ${infidelity}`}
      </Typography>
      <ul className={styles['chart']}>
        <li className={styles['chart__title']}>Masked Input Score</li>
        <li
          className={styles['chart__value']}
          style={{
            width: `${maskedInputScores[0] * 100}%`,
            backgroundColor: `hsl(216, 59%, calc(100% - ${maskedInputScores[0] *
              100}% * 0.5))`,
          }}
          data-name="Masked Input - Class 0"
        >
          <span className={styles['chart__value__outlabel']}>Class 0</span>
          <span className={styles['chart__value__inlabel']}>{`${Number.parseInt(
            maskedInputScores[0] * 100,
            10
          )}%`}</span>
        </li>
        <li
          className={styles['chart__value']}
          style={{
            width: `${maskedInputScores[1] * 100}%`,
            backgroundColor: `hsl(216, 59%, calc(100% - ${maskedInputScores[1] *
              100}% * 0.5))`,
          }}
          data-name="Masked Input - Class 1"
        >
          <span className={styles['chart__value__outlabel']}>Class 1</span>
          <span className={styles['chart__value__inlabel']}>{`${Number.parseInt(
            maskedInputScores[1] * 100,
            10
          )}%`}</span>
        </li>
      </ul>
      <ul className={styles['chart']}>
        <li className={styles['chart__title']}>Original Input Score</li>
        <li
          className={styles['chart__value']}
          style={{
            width: `${inputScores[0] * 100}%`,
            backgroundColor: `hsl(216, 59%, calc(100% - ${inputScores[0] *
              100}% * 0.5))`,
          }}
          data-name="Input - Class 0"
        >
          <span className={styles['chart__value__outlabel']}>Class 0</span>
          <span className={styles['chart__value__inlabel']}>{`${Number.parseInt(
            inputScores[0] * 100,
            10
          )}%`}</span>
        </li>
        <li
          className={styles['chart__value']}
          style={{
            width: `${inputScores[1] * 100}%`,
            backgroundColor: `hsl(216, 59%, calc(100% - ${inputScores[1] *
              100}% * 0.5))`,
          }}
          data-name="Input - Class 1"
        >
          <span className={styles['chart__value__outlabel']}>Class 1</span>
          <span className={styles['chart__value__inlabel']}>{`${Number.parseInt(
            inputScores[1] * 100,
            10
          )}%`}</span>
        </li>
      </ul>
    </div>
  );
};

export default Scores;
