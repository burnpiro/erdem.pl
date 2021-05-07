// @flow
import React, { useEffect, useState, useReducer } from 'react';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/core/Slider';
import Button from '@material-ui/core/Button';
import DiagramGenerator from '../DiagramGenerator/DiagramGenerator';
import ProcessControls from '../DiagramGenerator/ProcessControls';
import { ACTIONS } from '../DiagramGenerator/helpers';

import { steps, animationWidth, animationHeight } from './data';

import styles from './InputPositionEmbeddingSin.module.scss';

function reducer(state, action) {
  switch (action.type) {
    case ACTIONS.SET:
      return { ...state, [action.key]: action.value };
    case ACTIONS.DELETE:
      return { ...state, [action.key]: undefined };
    default:
      throw new Error();
  }
}

const InputPositionEmbeddingSin = () => {
  const [step, setStep] = useState(1);
  const [state, dispatch] = useReducer(reducer, {});

  const onStepForward = () => {
    setStep(step + 1);
  };

  const onStepBackward = () => {
    setStep(step - 1);
  };

  const onStateChange = (value, key, action) => {
    dispatch({ type: action, value, key });
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
