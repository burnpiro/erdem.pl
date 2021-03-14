// @flow
import React, { useRef, useEffect, useState, useReducer } from 'react';
import { Typography } from '@material-ui/core';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import ImageGrid from './ImageGrid';

import styles from './XAIInfidelity.module.scss';

const grids = {
  INPUT: 'INPUT',
  MASK: 'MASK',
  inputAttribution: 'inputAttribution',
  maskedInput: 'maskedInput',
  maskedInputAttribution: 'maskedInputAttribution',
};

const initialState = {
  [grids.INPUT]: [0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5, 0.5],
  [grids.inputAttribution]: [0, 0, 0, 0, 0.49, 0, 0, 0, 0],
  [grids.MASK]: [0, 0, 0, 0, 0.4, 0, 0, 0, 0],
  [grids.maskedInputAttribution]: [0, 0, 0, 0, 0.49, 0, 0, 0, 0],
  [grids.maskedInput]: [0, 0, 0, 0, 0.25, 0, 0, 0, 0],
  selected: {
    gridName: null,
    index: null,
  },
  scores: {
    is: [0, 0],
    mis: [0, 0],
    infidelity: 0,
  },
};

const actions = {
  SET: 'SET',
  REPLACE: 'REPLACE',
  SELECT: 'SELECT',
  SET_SCORE: 'SET_SCORE',
};

function reducer(state, action) {
  console.log(action);
  switch (action.type) {
    case actions.SET:
      return {
        ...state,
        [action.value.gridName]: state[action.value.gridName].map((el, idx) => {
          return idx === action.value.index ? action.value.value : 0;
        }),
      };
    case actions.REPLACE:
      return { ...state, [action.value.gridName]: action.value.value };
    case actions.SELECT:
      return {
        ...state,
        selected: {
          gridName: action.value.gridName,
          index: action.value.value,
        },
      };
    case actions.SET_SCORE:
      console.log();
      return {
        ...state,
        scores: {
          is: action.value.is,
          mis: action.value.mis,
          infidelity: action.value.inf,
        },
      };
    default:
      return { ...state };
  }
}

function getMaskedInput(input, mask) {
  return input.map((el, idx) => el - mask[idx]);
}

const XAIInfidelity = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      // You can await here
      const infData = await fetch('/infidelity-data.json');
      setData(await infData.json());
    }
    fetchData();
  }, []);

  useEffect(() => {
    dispatch({
      type: actions.REPLACE,
      value: {
        gridName: grids.maskedInput,
        value: getMaskedInput(state[grids.INPUT], state[grids.MASK]),
      },
    });
    if (data != null) {
      const inputStr = state[grids.INPUT].map(el => el.toFixed(2)).join('_');
      const maskStr = state[grids.MASK].map(el => el.toFixed(2)).join('_');
      console.log(`${inputStr}-${maskStr}`);
      console.log(
        JSON.stringify(data[`${inputStr}-${maskStr}`].ia) ===
          JSON.stringify(data[`${inputStr}-${maskStr}`].mia)
      );
      dispatch({
        type: actions.REPLACE,
        value: {
          gridName: grids.inputAttribution,
          value: data[`${inputStr}-${maskStr}`].ia,
        },
      });
      dispatch({
        type: actions.REPLACE,
        value: {
          gridName: grids.maskedInputAttribution,
          value: data[`${inputStr}-${maskStr}`].mia,
        },
      });
      dispatch({
        type: actions.SET_SCORE,
        value: {
          is: data[`${inputStr}-${maskStr}`].is,
          mis: data[`${inputStr}-${maskStr}`].mis,
          inf: data[`${inputStr}-${maskStr}`].i,
        },
      });
    }
  }, [state[grids.MASK], data]);

  const onValueSelect = (grid, idx) => {
    dispatch({ type: actions.SELECT, value: { value: idx, gridName: grid } });
  };

  const onSliderChange = (event, value) => {
    dispatch({
      type: actions.SET,
      value: {
        gridName: state.selected.gridName,
        index: state.selected.index,
        value,
      },
    });
  };

  return (
    <React.Fragment>
      <Typography
        className={styles['small-devide-info']}
        variant={'subtitle1'}
        color={'primary'}
        align={'justify'}
      >
        {`This page is designed to work on desktop resolution, you might expirience difficulty using some of the features depends on your mobile device.`}
      </Typography>
      <div className={styles['box-grid']}>
        <ImageGrid
          values={state[grids.INPUT]}
          // onValueSelect={onValueSelect}
          selected={
            state.selected.gridName === grids.INPUT
              ? state.selected.index
              : null
          }
          gridId={grids.INPUT}
          className={styles['grid-item']}
          title="Input"
        />
        <ImageGrid
          values={state[grids.inputAttribution]}
          gridId={grids.inputAttribution}
          className={styles['grid-item']}
          title="Input Attribution"
        />
        <ImageGrid
          values={state[grids.MASK]}
          gridId={grids.MASK}
          className={styles['grid-item'] + ' ' + styles['grid-item--noise']}
          selected={
            state.selected.gridName === grids.MASK ? state.selected.index : null
          }
          onValueSelect={onValueSelect}
          title="Mask"
        />
        <ImageGrid
          values={state[grids.maskedInput]}
          gridId={grids.maskedInput}
          className={styles['grid-item']}
          title="Masked Input"
        />
        <ImageGrid
          values={state[grids.maskedInputAttribution]}
          gridId={grids.maskedInputAttribution}
          className={styles['grid-item']}
          title="Masked Input Attribution"
        />
      </div>
      <Typography variant={'h3'} color={'primary'} align={'justify'}>
        {`Scores`}
      </Typography>
      <Typography variant={'body1'} color={'textPrimary'} align={'justify'}>
        {`Original Input: Class 0 = ${state.scores.is[0]}, Class 1 = ${state.scores.is[1]}`}
        <br />
        {`Masked Input: Class 0 = ${state.scores.mis[0]}, Class 1 = ${state.scores.mis[1]}`}
        <br />
        {`inf: ${state.scores.infidelity}`}
      </Typography>
      <div className={styles['infidelity-controls']}>
        <Typography variant={'h5'} color={'primary'} align={'justify'}>
          {`Controlls`}
        </Typography>
        <Typography id="discrete-slider" gutterBottom>
          {`Value`}
        </Typography>
        {state.selected.gridName && (
          <Slider
            defaultValue={0}
            // getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="on"
            onChange={onSliderChange}
            value={state[state.selected.gridName][state.selected.index]}
            step={0.1}
            marks
            min={-0.4}
            max={0.5}
          />
        )}
      </div>
    </React.Fragment>
  );
};

export default XAIInfidelity;
