// @flow
import React, { useRef, useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import styles from './XAIInfidelity.module.scss';

const boxSize = 80;

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    fontWeight: 'bold',
  },
  gridContainer: {
    display: 'grid',
    gridTemplateColumns: `${boxSize}px ${boxSize}px ${boxSize}px`,
    gridTemplateRows: `${boxSize}px ${boxSize}px ${boxSize}px`,
    justifyContent: 'center',
    justifyItems: 'stretch',
  },
}));

const ImageGrid = ({
  values = [],
  onValueSelect = null,
  gridId = '',
  title = '',
  selected = null,
  className,
}) => {
  const classes = useStyles();

  const actions = values.map((value, index) => () => {
    onValueSelect != null ? onValueSelect(gridId, index) : null;
  });

  return (
    <div className={classes.container + ' ' + className}>
      <span>{title}</span>
      <div className={classes.gridContainer}>
        {values.map((value, index) => {
          const intValue = Number(value);
          const colorValue = 255 - Number.parseInt(Number(value) * 255, 10);
          const fontColor = colorValue < 170 ? '#eee' : '#000';
          return (
            <div
              key={String(index)}
              style={{
                backgroundColor: `rgb(${colorValue}, ${colorValue}, ${colorValue})`,
                color: fontColor,
              }}
              className={
                styles['grid-cell'] +
                ' ' +
                (onValueSelect != null ? styles['grid-cell--clickable'] : '') +
                ' ' +
                (selected != null && selected === index
                  ? styles['grid-cell--selected']
                  : '')
              }
              onClick={actions[index]}
            >
              {intValue.toFixed(2)}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ImageGrid;
