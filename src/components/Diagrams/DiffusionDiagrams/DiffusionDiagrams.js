import React, { useEffect, useState, useReducer } from 'react';
import styles from './DiffusionDiagrams.module.scss';
import DiagramGenerator from '../../DiagramGenerator/DiagramGenerator';
import { ACTIONS } from '../../DiagramGenerator/helpers';

import PositionSliders from '../../DiagramGenerator/PositionSliders';
import * as forwardDiffusionData from './diagrams/forward-diffusion';
import * as reverseDiffusionData from './diagrams/reverse-diffusion';
import * as diffusionModel from './diagrams/diffusion-model';

const DIAGRAMS = {
  'diffusion/forward_diffusion': forwardDiffusionData,
  'diffusion/reverse_diffusion': reverseDiffusionData,
  'diffusion/diffusion_model': diffusionModel,
};

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

const defaultDiagram = {
  animationHeight: 0,
  animationWidth: 0,
  defaultItems: [],
  steps: {},
};

const DiffusionDiagrams = props => {
  const [
    { animationHeight, animationWidth, defaultItems, steps },
    setData,
  ] = useState(defaultDiagram);
  useEffect(() => {
    const loadData = async () => {
      const newData = await DIAGRAMS[props.src];

      setData(newData);
    };

    loadData();
  }, [props.src]);

  const [step, setStep] = useState(1);

  const onSliderPositionChange = (value, position) => {
    setStep(value);
  };

  const currStep = steps[`step${step}`];

  return (
    <div className={styles['default-diagram-continaer']}>
      {currStep && (
        <React.Fragment>
          <DiagramGenerator
            data={currStep}
            step={step}
            animationHeight={animationHeight}
            animationWidth={animationWidth}
          />
          <PositionSliders
            onUpdateValue={onSliderPositionChange}
            colors={['blue']}
            elements={[0]}
            min={1}
            max={Object.keys(steps).length}
            prefix={''}
            style={{ maxWidth: `50%` }}
            fullWidth={false}
            updateOnChange={true}
            displayElementName={false}
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default DiffusionDiagrams;
