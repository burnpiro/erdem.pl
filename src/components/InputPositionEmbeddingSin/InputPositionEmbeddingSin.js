// @flow
import React, { useEffect, useState, useReducer } from 'react';
import DiagramGenerator from '../DiagramGenerator/DiagramGenerator';
import ProcessControls from '../DiagramGenerator/ProcessControls';
import { ACTIONS } from '../DiagramGenerator/helpers';

import { steps, animationWidth, animationHeight, defaultItems } from './data';

import styles from './InputPositionEmbeddingSin.module.scss';
import PositionSliders from './PositionSliders';

const POSITION_ACTIONS = {
  ...ACTIONS,
  SET_POS: 'SET_POS',
};

const positions = [0, 1, 2, 3];
const elements = [0, 1, 2, 3];

function reducer(state, action) {
  let type = action.type;
  if (action.type === POSITION_ACTIONS.SET) {
    type =
      state[action.key] == null
        ? POSITION_ACTIONS.SET
        : POSITION_ACTIONS.DELETE;
  }
  switch (type) {
    case POSITION_ACTIONS.SET_POS:
      return {
        ...state,
        positions: {
          ...state.positions,
          [action.position]: elements.reduce(
            (acc, el) => ({ ...acc, [`i${el}`]: action.value }),
            {}
          ),
        },
        ...elements.reduce(
          (acc, el) => ({
            ...acc,
            [`${action.position},i${el}`]: action.value,
          }),
          {}
        ),
      };
    case POSITION_ACTIONS.SET:
      if (action.key == null) {
        return state;
      }
      return {
        ...state,
        [action.key]:
          state.positions[action.key.split(',')[0]][action.key.split(',')[1]],
      };
    case POSITION_ACTIONS.DELETE:
      return { ...state, [action.key]: undefined };
    default:
      throw new Error();
  }
}

const InputPositionEmbeddingSin = () => {
  const [step, setStep] = useState(1);
  const [state, dispatch] = useReducer(reducer, {
    ...positions.reduce((posAcc, pos) => {
      return {
        ...posAcc,
        ...elements.reduce(
          (acc, el) => ({ ...acc, [`pos${pos},i${el}`]: pos }),
          {}
        ),
      };
    }, {}),
    positions: positions.reduce((posAcc, pos) => {
      return {
        ...posAcc,
        [`pos${pos}`]: elements.reduce(
          (acc, el) => ({ ...acc, [`i${el}`]: pos }),
          {}
        ),
      };
    }, {}),
  });

  const onStepForward = () => {
    setStep(step + 1);
  };

  const onStepBackward = () => {
    setStep(step - 1);
  };

  const onStateChange = (value, key, action) => {
    dispatch({ type: action, value, key });
  };

  const onSliderPossitionChange = (value, position) => {
    dispatch({ type: POSITION_ACTIONS.SET_POS, value, position });
  };

  const currStep = steps[`step${step}`];

  return (
    <div className={styles['sin-position-embedding-continaer']}>
      <DiagramGenerator
        data={currStep}
        step={step}
        animationHeight={animationHeight}
        animationWidth={animationWidth}
        id="sin-position-embedding"
        values={state}
        onUpdateValues={onStateChange}
      />
      <PositionSliders
        onUpdateValue={onSliderPossitionChange}
        colors={defaultItems.map(el => el.color)}
      />
      <ProcessControls
        onStepForward={onStepForward}
        onStepBackward={onStepBackward}
        prevDisabled={step < 2}
        nextDisabled={step === Object.keys(steps).length}
      />
    </div>
  );
};

export default InputPositionEmbeddingSin;
